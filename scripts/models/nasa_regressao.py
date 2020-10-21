import pandas as pd
import matplotlib.pyplot as plt
import numpy as np

archive = pd.read_csv('../csvs/common/data.csv')
archive = archive.drop('State', axis=1)
archive = archive.drop('Month', axis=1)
#archive = archive.drop('Population', axis=1)

toForecast = pd.read_csv('../csvs/common/toForecast.csv')
#toForecast = toForecast.drop('Population', axis=1)

#mostrar os arquivos sendo carregados
#print(archive.head())

#archive['Class'] = archive['Class'].replace('Positive',1)
#archive['Class'] = archive['Class'].replace('Negative',0)

y = archive['Deaths']
x = archive.drop('Deaths', axis=1)

from sklearn.model_selection import train_test_split

x_train, x_test, y_train, y_test = train_test_split(x,y,test_size=0.3)

from sklearn.linear_model import LinearRegression

model = LinearRegression()
model.fit(x_train,y_train)

result = model.score(x_test, y_test)

print(":", result)

forecast = model.predict(toForecast)

x = np.arange(0,51,1)/10
plt.scatter(x, forecast)
plt.xlabel('CO index [ppm]')
plt.ylabel('Deaths monthly')
plt.title('City with 2M people')
plt.show()


#print(y_test[100:103])
print(forecast)


