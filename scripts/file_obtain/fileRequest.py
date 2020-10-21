import requests  # get the requsts library from https://github.com/requests/requests


# overriding requests.Session.rebuild_auth to mantain headers when redirected

class SessionWithHeaderRedirection(requests.Session):
    AUTH_HOST = 'urs.earthdata.nasa.gov'

    def __init__(self, username, password):

        super().__init__()

        self.auth = (username, password)

    # Overrides from the library to keep headers when redirected to or from

    # the NASA auth host.

    def rebuild_auth(self, prepared_request, response):

        headers = prepared_request.headers

        url = prepared_request.url

        if 'Authorization' in headers:

            original_parsed = requests.utils.urlparse(response.request.url)

            redirect_parsed = requests.utils.urlparse(url)

            if (original_parsed.hostname != redirect_parsed.hostname) and redirect_parsed.hostname != self.AUTH_HOST and original_parsed.hostname != self.AUTH_HOST:
                del headers['Authorization']

        return


# create session with the user credentials that will be used to authenticate access to the data

username = "########"
password = "########"

session = SessionWithHeaderRedirection(username, password)

# the url of the file we wish to retrieve

#url = "https://goldsmr4.gesdisc.eosdis.nasa.gov/opendap/MERRA2_MONTHLY/M2TMNXAER.5.12.4/2015/MERRA2_400.tavgM_2d_aer_Nx.201512.nc4.ascii?SO2SMASS[0:0][227:287][76:183],time,lat[227:287],lon[76:183]"

names = ["janeiro_2015.txt", "fevereiro_2015.txt", "abril_2015.txt", "marco_2015.txt", "maio_2015.txt", "junho_2015.txt",
         "julho_2015.txt", "agosto_2015.txt", "setembro_2015.txt", "outubro_2015.txt", "novembro_2015.txt", "dezembro_2015.txt",
         "janeiro_2016.txt", "fevereiro_2016.txt", "abril_2016.txt", "marco_2016.txt", "maio_2016.txt", "junho_2016.txt",
         "julho_2016.txt", "agosto_2016.txt", "setembro_2016.txt", "outubro_2016.txt", "novembro_2016.txt", "dezembro_2016.txt"]

pollutants = ['aqua']

i = 0;

# extract the filename from the url to be used when saving the file

for pollutant in pollutants:

    urls = []
    infile = open('dataLink/' + pollutant + '.txt', 'r')
    for line in infile:
        urls.append(line)#line.strip().split(',')
    infile.close()

    for url in urls:

        filename = 'saves/' + pollutant + '/' + names[i]
        i = i+1;
        #url[url.rfind('/') + 1:]

        try:

            # submit the request using the session

            response = session.get(url, stream=True)

            print(response.status_code)

            # raise an exception in case of http errors

            response.raise_for_status()

            # save the file

            with open(filename, 'wb') as fd:

                for chunk in response.iter_content(chunk_size=1024 * 1024):
                    fd.write(chunk)



        except requests.exceptions.HTTPError as e:

            # handle any errors here

            print(e)