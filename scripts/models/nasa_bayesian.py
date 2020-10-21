import pandas as pd
archive = pd.read_csv('../csvs/common/data.csv')
archive = archive.drop('State', axis=1)
archive = archive.drop('Month', axis=1)

toForecast = pd.read_csv('../csvs/common/toForecast.csv')

#mostrar os arquivos sendo carregados
#print(archive.head())

#archive['Class'] = archive['Class'].replace('Positive',1)
#archive['Class'] = archive['Class'].replace('Negative',0)

#Converter para formato numérico, ou seja a categoria será substituida por 0 e 1
y = archive['Deaths']
x = archive.drop('Deaths', axis=1)

from sklearn.model_selection import train_test_split

x_train, x_test, y_train, y_test = train_test_split(x,y,test_size=0.3)

from sklearn.linear_model import BayesianRidge

model = BayesianRidge()
model.fit(x_train,y_train)

result = model.score(x_test, y_test)

print(":", result)

forecast = model.predict(toForecast)

#print(y_test[100:103])
print(forecast)


