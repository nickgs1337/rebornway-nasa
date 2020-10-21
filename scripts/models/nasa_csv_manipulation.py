import pandas as pd

years = ['2014', '2015', '2016', '2017', '2018']

archives = ['o3', 'co', 'so2', 'no2', 'pm10', 'temp', 'humidity', 'pressure']

month = ['01/', '02/', '03/', '04/', '05/', '06/', '07/', '08/', '09/', '10/',
         '11/', '12/']

states = ['Alabama', 'Alaska', 'Arkansas', 'Arizona', 'California',
          'Kansas', 'North Carolina', 'South Carolina', 'Colorado', 'Connecticut',
          'North Dakota', 'South Dakota', 'Delaware', 'Florida', 'Georgia', 'Hawaii',
          'Idaho', 'Rhode Island', 'Illinois', 'Indiana', 'Iowa', 'Kentucky',
          'Louisiana', 'Maine', 'Maryland', 'Massachusetts', 'Michigan', 'Minnesota',
          'Mississippi', 'Missouri', 'Montana', 'Nebraska', 'Nevada', 'New Hampshire',
          'New Jersey', 'New York', 'New Mexico', 'Oklahoma', 'Ohio', 'Oregon',
          'Pennsylvania', 'Tennessee', 'Texas', 'Utah', 'Vermont', 'Virginia',
          'West Virginia', 'Washington', 'Wisconsin', 'Wyoming']

#Generation file that contains states
statesDF = pd.DataFrame({'State': states})
statesDF.to_csv('../csvs/common/states.csv', index=False)

for year in years:
    for arch in archives:
        print("Convert: " + arch + " of " + year + " in progress...")
        archive = pd.read_csv('../csvs/' + year + '/' + arch + '.csv', ';')

        df = pd.DataFrame({'State': [], 'Month': [], arch: []})
        for state in states:
            filtered = archive[archive['State Name'] == state]
            for m in month:
                byMonth = filtered[filtered['Date Local'].str.contains(m+year)]
                am = byMonth['Value'].count()
                if (am == 0):
                    am = 1;
                amount = byMonth['Value'].sum()/am
                df = df.append({'State': state, 'Month': m+year, arch: amount}, ignore_index=True)

        df.to_csv('../csvs/process/'+year+'/'+arch+'.csv', index=False)
        print("Convert: " + arch + " of " + year + " finished!")

#Mensure population
for year in years:
    population = pd.read_csv('../csvs/' + year + '/population.csv', ';')
    population_n_times = population.loc[population.index.repeat(12)]
    population_n_times.to_csv('../csvs/process/' + year + '/population_n_times.csv', index=False)

#Mensure deaths per state and date
for year in years:
    archive = pd.read_csv('../csvs/' + year + '/deaths.csv', ';')
    df = pd.DataFrame({'State': [], 'Month': [], 'Deaths': []})
    for state in states:
        save = archive[archive['State'] == state]
        for m in month:
            aa = save[(save['Month'] == '01/' + m+year)]
            value = aa[aa['Notes'] == 'Total']['Deaths'].sum()
            df = df.append({'State': state, 'Month': m+year, 'Deaths': value}, ignore_index=True)
    df.to_csv('../csvs/process/' + year + '/deaths.csv', index=False)

archive_final = pd.DataFrame({})
for year in years:
    o3 = pd.read_csv('../csvs/process/' + year + '/o3.csv')
    so2 = pd.read_csv('../csvs/process/' + year + '/so2.csv')
    no2 = pd.read_csv('../csvs/process/' + year + '/no2.csv')
    pm10 = pd.read_csv('../csvs/process/' + year + '/pm10.csv')
    co = pd.read_csv('../csvs/process/' + year + '/co.csv')
    temp = pd.read_csv('../csvs/process/' + year + '/temp.csv')
    humidity = pd.read_csv('../csvs/process/' + year + '/humidity.csv')
    pressure = pd.read_csv('../csvs/process/' + year + '/pressure.csv')
    population = pd.read_csv('../csvs/process/' + year + '/population_n_times.csv')
    death = pd.read_csv('../csvs/process/' + year + '/deaths.csv', ',')

    df_year = pd.concat([o3, so2['so2'], no2['no2'], pm10['pm10'], co['co'], temp['temp'], humidity['humidity'],
                         pressure['pressure'], population['Population'], death['Deaths']], axis=1, join='inner').sort_index()
    df_year.to_csv('../csvs/process/' + year + '/final_year.csv', index=False)

    archive_final = archive_final.append(pd.read_csv('../csvs/process/' + year + '/final_year.csv'), ignore_index=True)

archive_final.to_csv('../csvs/common/data.csv', index=False)

print("Finish!")