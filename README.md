# To access our website visit [http://rebornway.co/](http://rebornway.co/)

## About us project

It is a fact that atmospheric pollution corresponds to a great danger for the future of humanity, directly affecting the life of all living beings on the planet, from fauna and flora to human beings. It can bring profound damage to human health, as exposed by the following statistics: 

- 9 out of 10 people breathe polluted air around the world 
- 55% of the world's population lives in urban areas, where pollutants tend to be concentrated, and this proportion is expected to reach 70% by 2050
- This causes approximately 7 million deaths per year, as estimated by the World Health Organization (WHO)
- This number is almost 7 times higher than the deaths by COVID-19

Faced with this problem, we realize that informing the population about the strong relationship between health damage and exposure to air pollution levels, weather conditions and location is a crucial point for mass awareness and for the evolution of behaviors regarding the issue, which often goes unnoticed by people's eyes and is not easily accessible or understood. 

For that, an intuitive and dynamic platform was developed, which relies on the Health Score tool, which keeps the user updated on the index of pollutants (CO, CH4, HCHO, O3, NO2, SO2, PM2.5 and PM10) in his location, including a mathematical analysis with medical basis that provides an estimate of how susceptible the individual is to health data, according to the comorbidities he presents.

In addition, we concluded that it would be extremely useful to predict the occurrence of deaths from pneumonia, influenza and chronic obstructive pulmonary disease, at first. We used mathematical modeling applied to a machine learning in Python language. In order to achieve greater accuracy, we compared the ML models listed below:

- Bayesian
- Elasticnet
- Lasso
- Aggressive Regression
- Regression
- Ridge

Of the above models, those with the highest accuracy were Aggressive Regression and Regression, thus the two chosen to best describe different population scenarios. For cases where the population is expressive the Aggressive Regression method is more indicated, otherwise Regression is more efficient. 

For the learning of the machine, data from the United States from 2014 to 2018 were used, collected as follows:

- For deaths caused by respiratory diseases, we used the database of the Center of Disease Controls and Preventions (CDC), obtaining as variables:
    - State
    - Month 	
    - Age
    - Number of deaths
    
- For atmospheric conditions, including pollutants, the parameters acquired, taking into account those that demonstrated influence on respiratory conditions according to medical scientific literature, were:
    - For 2014 and 2015, the data used were from NASA:
        - CO, O3, temperature, relative humidity and atmospheric pressure were obtained from the satellite AIRX3STM V7.0 L3
        - SO2, from the M2TMNXAER V5.12.4 satellite
        - NO2, from satellite OMNO2d V3 L3

    - For the years 2016, 2017 and the first three months of 2018
        - CO, O3, temperature, relative humidity and atmospheric pressure were found at the United States Environmental Protection Agency government website
        - SO2, from M2TMNXAER V5.12.4 (NASA) satellite
        - NO2, from satellite OMNO2d V3 L3 (NASA)

    - For the remaining months of 2018, we use:
        - CO, NO2, O3 and SO2 from the Sentinel-5P L2 satellite, by the S5PL2 mission (ESA)
        - Temperature, relative humidity and atmospheric pressure from the United States Environmental Protection Agency government site

For all years, PM10 figures have also been taken from the United States Environmental Protection Agency government website	
	
For the processing of the elements obtained, those from NASA were acquired in hdf.ASCII format, converted to CSV and finally processed as matrices. 

The data from ESA were obtained through cURL request as images in bmp format, then converted to RGB except also as CSV. For the acquisition of averages, adjacent fields were considered to represent a region. The resulting mean value was a simple arithmetic mean of these fields. 

In the case of government data, these were converted to CSV, associating dates and locations of all information. 

Finally, the generated prefiles (with all data in general) were converted into single files, standardizing units of measurement, latitudes and longitudes of the chosen locations, names of variables and dates, for a tabulation format compatible with death data, thus allowing the use in ML.

With this, the mathematical modeling developed reached a satisfactory and remarkable percentage of hits, making it possible to save lives and help decision makers with a more assertive targeting of their actions. Our progress has left us very accomplished and happy, since the members of the group, for not having much experience in mathematical modeling and extraction of satellite data, faced impasses to achieve the desired goals, seeking new knowledge in this field and working as a team. Thus, this guaranteed us the necessary motivation to want to continue our project, seeking to improve it and expand it whenever possible.


## How to run the project and scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.