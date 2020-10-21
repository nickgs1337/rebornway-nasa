import pandas as pd
import matplotlib.pyplot as plt
import numpy as np
import PIL
import csv
import glob

def storageImg(files):
    images = [PIL.Image.open(file) for file in files]
    return images

def csvWriter(fil_name, nparray):
    example = nparray.tolist()
    with open(fil_name+'.csv', 'w', newline='') as csvfile:
        writer = csv.writer(csvfile, delimiter=',')
        writer.writerows(example)

def generateCSV(images, files):
    for image, name in zip(images, files):
        image = np.array(image)
        CSVlist = [csvWriter(name, image)]

def run(files):
    images = storageImg(files)
    generateCSV(images, files)
    return images

def intervals(locRound, size):
    intervaledLoc = [[[int(loc[0] - size), int(loc[0] + size)], [int(loc[1] - size), int(loc[1] + size)]] for loc in
                     locRound]
    return np.abs(intervaledLoc)

def finalMean(concentrationsSliced):
  means = np.array([np.mean(matrices) for location in concentrationsSliced for matrices in location ])
  return means

def csvWriterPandas(fil_name, example):
  with open(fil_name+'.csv', 'w', newline='') as csvfile:
    writer = csv.writer(csvfile, delimiter=',')
    writer.writerows(example)

from sklearn.impute import SimpleImputer

# Imputation
def imputation(dataframe):
  my_imputer = SimpleImputer()
  imputed_dataframe = pd.DataFrame(my_imputer.fit_transform(dataframe))
  imputed_dataframe.describe()
  return imputed_dataframe


def sliceMap(coodinates, mapwidth, mapheight):
    max = np.max(coordinates, axis=0)
    min = np.min(coordinates, axis=0)
    rounded = [np.round(max), np.round(min)]
    factors = rounded[0] - rounded[1]
    translated = (coordinates + [90, 180]) * 4  # [mapwidth, mapheight]/factors
    coordOffset = np.around(translated).astype(int)
    return np.around(translated).astype(int)

def unitmean(imputed_dataframe, range, loctranslated):
  inflim_lat  = np.around(loctranslated[:,0]-range).astype(int)
  suplim_lat  = np.around(loctranslated[:,0]+range).astype(int)
  inflim_long = np.around(loctranslated[:,1]-range).astype(int)
  suplim_long = np.around(loctranslated[:,1]+range).astype(int)
  means = []
  for i,_ in enumerate(inflim_lat):
    lat = np.arange(inflim_lat[i],suplim_lat[i])
    long = np.arange(inflim_long[i],suplim_long[i])
    holder = np.asarray(imputed_dataframe)[lat, long]
    meanHolder = np.mean(holder)
    means.append(meanHolder)
  return means

def concentrationMean(arrayImages, intervaled):
  region = [arrayImages[interval[0][0]:interval[0][1], #latitudes
                    interval[1][0]:interval[1][1], #longitedes
                    1:] for interval in intervaled] #RGB channels
  return np.array(region)

years = ['2018']
months = ['04', '05', '06', '07', '08', '09', '10', '11', '12']

for year in years:
 for month in months:
     folder = '../images/'+year+'/'+month+'/*.bmp'
     files = glob.glob(folder)
     print(files)

     images = run(files)

     coordinates = np.array([[33.009729, -86.767986],
                             [65.662974, -152.680225],
                             [34.861482, -92.445789],
                             [34.490558, -111.889376],
                             [36.991554, -119.763117],
                             [38.607915, 98.530059],
                             [35.637753, -79.171863],
                             [33.888385, -80.772328],
                             [39.085679, -105.753043],
                             [41.555102, -72.674349],
                             [47.301324, -100.406133],
                             [44.403356, -100.362945],
                             [38.938108, -75.472131],
                             [28.180683, -81.566901],
                             [32.759085, -83.419519],
                             [19.625318, -155.524609],
                             [44.383125, -114.627169],
                             [41.657752, -71.51467],
                             [40.056942, -89.320978],
                             [39.824493, -86.145119],
                             [41.895684, -93.383126],
                             [37.6265311, -88.0921685],
                             [30.532277, -91.859954],
                             [45.112176, -69.21317],
                             [38.969392, -76.511818],
                             [42.348583, -71.886931],
                             [44.431373, -84.723837],
                             [45.999328, -94.490988],
                             [32.62873, -89.902164],
                             [38.481367, -92.538641],
                             [47.025732, -109.784619],
                             [41.537191, -100.20987],
                             [39.328261, -117.089878],
                             [43.645746, -71.591645],
                             [39.995839, -74.584874],
                             [43.015146, -75.696376],
                             [34.396468, -105.949359],
                             [35.493897, -97.311148],
                             [40.189677, -82.848862],
                             [44.052884, -120.763447],
                             [40.750438, -77.670567],
                             [35.857756, -86.331751],
                             [31.325608, -99.375351],
                             [39.274899, -111.745956],
                             [43.944735, -72.735493],
                             [37.482976, -78.703476],
                             [38.601185, -80.727662],
                             [47.242266, -120.507092],
                             [44.609367, -89.748056],
                             [42.896405, -107.59752]])

     print(np.max(coordinates, axis=0), np.min(coordinates, axis=0))

     max = np.max(coordinates, axis=0)
     min = np.min(coordinates, axis=0)
     rounded = [np.round(max), np.round(min)]
     print(rounded)

     arrayImages = [np.array(img) for img in images]
     arrayImages[0].shape
     factors = rounded[0] - rounded[1]
     print(factors)

     LAT = factors[0]
     LON = factors[1]
     MIN_LAT = rounded[1][0]
     MIN_LON = rounded[1][1]

     coordOffset = coordinates - rounded[1]
     translated = coordOffset * 512 / factors
     transRound = np.round(translated)
     print(factors / 512)

     kms = factors * 111 / 512

     intervaled = intervals(transRound, 2)

     concentrationExample = concentrationMean(arrayImages[0], intervaled)

     concentrationsSliced = np.array([concentrationMean(arrayImg, intervaled) for arrayImg in arrayImages])

     concentrationsSliced.shape

     means = finalMean(concentrationsSliced)

     finalData = np.reshape(means, concentrationsSliced.shape)

     dataframe = pd.DataFrame(finalData.T, columns=['CO', 'NO2', 'SO2', 'O3'], )

     print(dataframe.head())

     dataframe = dataframe.fillna(0)

     CO_MAX = 0.1
     NO2_MAX = 0.0003
     SO2_MAX = 0.01
     O3_MAX = 0.36

     dataframe['CO'] = dataframe['CO'] * CO_MAX / 255
     dataframe['NO2'] = dataframe['NO2'] * NO2_MAX / 255
     dataframe['SO2'] = dataframe['SO2'] * SO2_MAX / 255
     dataframe['O3'] = dataframe['O3'] * O3_MAX / 255

     print(dataframe.head())

     # 0: "RR", 1: "AP", 2: "AM", 3: "AC", 4: "RO", 5: "PA", 6: "MA",
     # 7: "PI", 8: "CE", 9: "RN", 10: "PB", 11: "PE", 12: "AL",
     # 13: "SE", 14: "BA", 15: "TO", 16: "MT", 17: "GO", 18: "MS",
     # 19: "MG", 20: "ES", 21: "RJ", 22: "SP", 23: "PR", 24: "SC",
     # 25: "RS", 26: "DF"
     dataframe.rename(index={0: "Alabama",
                             1: "Alaska",
                             2: "Arkansas",
                             3: "Arizona",
                             4: "California",
                             5: "Kansas",
                             6: "NorthCarolina",
                             7: "SouthCarolina",
                             8: "Colorado",
                             9: "Connecticut",
                             10: "NorthDakota",
                             11: "SouthDakota",
                             12: "Delaware",
                             13: "Florida",
                             14: "Georgia",
                             15: "Hawaii",
                             16: "Idaho",
                             17: "RhodeIsland",
                             18: "Illinois",
                             19: "Indiana",
                             20: "Iowa",
                             21: "Kentucky",
                             22: "Louisiana",
                             23: "Maine",
                             24: "Maryland",
                             25: "Massachusetts",
                             26: "Michigan",
                             27: "Minnesota",
                             28: "Mississippi",
                             29: "Missouri",
                             30: "Montana",
                             31: "Nebraska",
                             32: "Nevada",
                             33: "NewHampshire",
                             34: "NewJersey",
                             35: "NewYork",
                             36: "NewMexico",
                             37: "Oklahoma",
                             38: "Ohio",
                             39: "Oregon",
                             40: "Pennsylvania",
                             41: "Tennessee",
                             42: "Texas",
                             43: "Utah",
                             44: "Vermont",
                             45: "Virginia",
                             46: "WestVirginia",
                             47: "Washington",
                             48: "Wisconsin",
                             49: "Wyoming"})

     print(dataframe.head())

     csvWriterPandas('../datas_satelites/process/concentrations', dataframe)

     temperatura = pd.read_csv('../datas_satelites/MOD_LSTD_M_2020-10-01_gs_1440x720.CSV', header=None)
     umidade = pd.read_csv('../datas_satelites/MYDAL2_M_SKY_WV_2018-12-01_rgb_1440x720.CSV', header=None)

     temp = temperatura.replace(99999.0, None)
     imputed_temp = imputation(temp)
     temptranslated = sliceMap(coordinates, 720, 1440)
     tempMeans = unitmean(imputed_temp, 2, temptranslated)
     statesTempdataframe = pd.DataFrame(tempMeans, columns=['Temperatura'])
     statesTempdataframe.rename(index={0: "Alabama",
                                       1: "Alaska",
                                       2: "Arkansas",
                                       3: "Arizona",
                                       4: "California",
                                       5: "Kansas",
                                       6: "NorthCarolina",
                                       7: "SouthCarolina",
                                       8: "Colorado",
                                       9: "Connecticut",
                                       10: "NorthDakota",
                                       11: "SouthDakota",
                                       12: "Delaware",
                                       13: "Florida",
                                       14: "Georgia",
                                       15: "Hawaii",
                                       16: "Idaho",
                                       17: "RhodeIsland",
                                       18: "Illinois",
                                       19: "Indiana",
                                       20: "Iowa",
                                       21: "Kentucky",
                                       22: "Louisiana",
                                       23: "Maine",
                                       24: "Maryland",
                                       25: "Massachusetts",
                                       26: "Michigan",
                                       27: "Minnesota",
                                       28: "Mississippi",
                                       29: "Missouri",
                                       30: "Montana",
                                       31: "Nebraska",
                                       32: "Nevada",
                                       33: "NewHampshire",
                                       34: "NewJersey",
                                       35: "NewYork",
                                       36: "NewMexico",
                                       37: "Oklahoma",
                                       38: "Ohio",
                                       39: "Oregon",
                                       40: "Pennsylvania",
                                       41: "Tennessee",
                                       42: "Texas",
                                       43: "Utah",
                                       44: "Vermont",
                                       45: "Virginia",
                                       46: "WestVirginia",
                                       47: "Washington",
                                       48: "Wisconsin",
                                       49: "Wyoming", })
     csvWriterPandas('../datas_satelites/process/temperatura_estados', statesTempdataframe)

     umid = umidade.replace(99999.0, None)
     imputed_umid = imputation(umid)
     umidtranslated = sliceMap(coordinates, 720, 1440)
     umidMeans = unitmean(imputed_umid, 2, umidtranslated)
     statesUmidataframe = pd.DataFrame(umidMeans, columns=['Umidade'])
     statesUmidataframe.rename(index={0: "Alabama",
                                      1: "Alaska",
                                      2: "Arkansas",
                                      3: "Arizona",
                                      4: "California",
                                      5: "Kansas",
                                      6: "NorthCarolina",
                                      7: "SouthCarolina",
                                      8: "Colorado",
                                      9: "Connecticut",
                                      10: "NorthDakota",
                                      11: "SouthDakota",
                                      12: "Delaware",
                                      13: "Florida",
                                      14: "Georgia",
                                      15: "Hawaii",
                                      16: "Idaho",
                                      17: "RhodeIsland",
                                      18: "Illinois",
                                      19: "Indiana",
                                      20: "Iowa",
                                      21: "Kentucky",
                                      22: "Louisiana",
                                      23: "Maine",
                                      24: "Maryland",
                                      25: "Massachusetts",
                                      26: "Michigan",
                                      27: "Minnesota",
                                      28: "Mississippi",
                                      29: "Missouri",
                                      30: "Montana",
                                      31: "Nebraska",
                                      32: "Nevada",
                                      33: "NewHampshire",
                                      34: "NewJersey",
                                      35: "NewYork",
                                      36: "NewMexico",
                                      37: "Oklahoma",
                                      38: "Ohio",
                                      39: "Oregon",
                                      40: "Pennsylvania",
                                      41: "Tennessee",
                                      42: "Texas",
                                      43: "Utah",
                                      44: "Vermont",
                                      45: "Virginia",
                                      46: "WestVirginia",
                                      47: "Washington",
                                      48: "Wisconsin",
                                      49: "Wyoming", })
     csvWriterPandas('../datas_satelites/process/temperatura_estados', statesUmidataframe)


#coordinates = np.array([
#[1.982412, -61.426880],
#[1.593689, -52.016992],
#[-3.873574, -64.283420],
#[-8.963201, -70.363310],
#[-11.079112, -62.785181],
#[-4.871411, -52.721684],
#[-5.209189, -45.468431],
#[-7.474627, -42.355572],
#[-5.345183, -39.556922],
#[-5.909861, -36.599925],
#[-7.306302, -36.699159],
#[-8.323194, -37.968741],
#[-9.756657, -36.643270],
#[-10.659885, -37.374312],
#[-12.435302, -41.798611],
#[-9.977960, -48.263765],
#[-13.183693, -55.655239],
#[-16.202376, -49.638259],
#[-20.262102, -54.639455],
#[-18.979756, -44.796579],
#[-19.694772, -40.563513],
#[-22.308735, -42.415923],
#[-22.510024, -48.554745],
#[-24.733255, -51.312321],
#[-27.089118, -50.756816],
#[-29.697457, -53.240563],
#[-15.791799, -47.765179]
#])







