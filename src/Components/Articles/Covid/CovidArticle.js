import React from "react";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import Card from "@material-ui/core/Card";
import {makeStyles} from "@material-ui/core/styles";
import CovidBanner from './covid-banner.jpg'
import CovidTransmissao from './covid-e-transmissao.png'
import Grid from "@material-ui/core/Grid";
import CovidInfectionMap from "./CovidInfectionMap";

const useStyles = makeStyles({
    root: {
        minWidth: 275,
    }
});

const CovidArticle = () => {

  const classes = useStyles();
  return <Grid container spacing={3}>
        <Grid item xs={9} >
            <Card className={classes.root}>
              <CardContent >
                  <Typography variant="h4" component="h2">
                      COVID-19
                  </Typography>
                  <br />

                  <br />

                  <Typography variant="h6" component="h2">
                  What is the COVID-19 pandemic?
                  </Typography>

                  <iframe
                      id="embedded-human"
                      frameBorder="0"
                      width="100%"
                      height="550"
                      allowFullScreen="true"
                      src="https://human.biodigital.com/viewer/?be=3vNO&ui-info=true&ui-search=true&ui-reset=true&ui-fullscreen=true&ui-nav=true&ui-tools=true&ui-help=true&ui-chapter-list=false&ui-label-list=true&ui-anatomy-descriptions=false&ui-tutorial=false&ui-loader=bar&ui-whiteboard=true&disable-scroll=false&uaid=6hfuh">
                  </iframe>

                  <br/>

                  The first cases of Coronavirus (COVID-19) originated in a seafood market in the city of Wuhan located in China, the first occurrences were reported at the new year of December 31st, 2020, and the incidence increased exponentially during the first weeks.

                  <br/>

                  <Typography variant="h6" component="h2">
                      How many cases are there in the world?
                  </Typography>

                  <CovidInfectionMap/>

                  <br/>
                  <p>
                      <Typography variant="h6" component="h2">
                        What are the signs and symptoms?
                      </Typography>

                      <ul style={{
                          marginTop: 0,
                      }}>
                          <li> Cough</li>
                          <li> Fever</li>
                          <li> Coryza</li>
                          <li> Sore throat</li>
                          <li> Hard breathing</li>
                          <li> Loss of smell (anosmia)</li>
                          <li> Taste alteration (ageusia)</li>
                          <li> Gastrointestinal disorders (nausea, vomiting, diarrhea)</li>
                          <li> Tiredness (asthenia)</li>
                          <li> Decreased appetite (hyporexia)</li>
                          <li> Dyspnea (shortness of breath)</li>
                      </ul>
                  </p>

                  <Typography variant="h6" component="h2">
                      How does transmission occur?
                  </Typography>


                  <ul style={{
                      marginTop: 0,
                  }}>
                      <li> Handshakes (if the individuals were contaminated)</li>
                      <li> Droplets of saliva</li>
                      <li> Sneeze</li>
                      <li> Cough</li>
                      <li> Catarrh</li>
                      <li> Possible contaminated objects or surfaces, such as cell phones, tables, cutlery, door handles, toys and computer keyboards</li>
                  </ul>

                  <Typography variant="h6" component="h2">
                      What is the most recurrent diagnosis?
                  </Typography>

                  <p> <b>The clinical diagnosis</b><br/>
                      It is performed by the medical care, who must evaluate the possibility of the disease, especially in patients with the association of the following signs and symptoms:
                  <ul>
                      <li> Fever, which may be present at the time of the clinical examination or reported by the patient (feverish sensation) of recent occurrence</li>
                      <li> Respiratory tract symptoms (for example, cough, dyspnoea, runny nose, sore throat)</li>
                      <li> Other consistent symptoms including, myalgia, gastrointestinal disorders (diarrhea, nausea, vomiting), loss or decreased smell (anosmia) or loss or decreased taste (ageusia)</li>
                  </ul>
                  </p>
                  <p> <b>The clinical-epidemiological diagnosis</b><br/>
                      It is performed by the attending physician in which it is considered patients cases with the association of the signs and symptoms already mentioned or Severe acute respiratory syndrome history of close or home contact, in the last 14 days before the onset of symptoms, with a laboratory confirmed case for COVID-19 and for which it was not possible to carry out the laboratory investigation specific.
                  </p>
                  <p> <b>Clinical image diagnosis</b><br/>
                      Case of respiratory symptoms plus fever or SARS or death due to SARS that could not be confirmed or ruled out by laboratory criteria and with tomographic changes.
                  </p>
                  <p> <b>Laboratory diagnosis</b><br/>
                      If the patient has respiratory symptoms plus fever or Severe acute respiratory syndrome (SARS). The health professional may request the following laboratory tests:
                  <ul>
                      <li> Molecular biology, (RT-PCR in real time) that diagnoses both COVID-19, Influenza or the presence of Respiratory Syncytial Virus (RSV), usually until the eighth day of symptom onset</li>
                      <li> Immunological, which detects, or not, the presence of antibodies in samples collected from the eighth day of symptom onset. Being them:</li>
                      <ul>
                        <li> Immunoenzymatic assay (Enzyme-Linked Immunosorbent Assay - ELISA)</li>
                        <li> Immunochromatography (quick test) for antibody detection</li>
                        <li> Electrochemiluminescence immunoassay (ECLIA)</li>
                        <li> Antigen search: reagent result for SARS-CoV-2 by the  immunochromatography method for antigen detection</li>
                      </ul>
                  </ul>
                  </p>
                  <p> <b>Laboratory diagnosis in asymptomatic individual (person without symptoms)</b><br/>
                  <ul>
                      <li>Molecular Biology exam with detectable result for SARS-CoV-2 performed by the RT-PCR method in real time</li>
                      <li>Immunological exam with reagent result for IgM and/or IgA performed by the following methods: Immunoenzymatic assay (ELISA) and Immunochromatography (quick test) for antibody detection</li>
                  </ul>
                  </p>
                  <Typography variant="h6" component="h2">
                      How to prevent?
                  </Typography>

                  <ul>
                      <li> Wash your hands frequently up to the wrists with soap and water, or clean them with 70% gel alcohol. This frequency should be increased when you are in a public environment (work environments, buildings and commercial facilities) when using public transport structures or touching surfaces and objects for shared use</li>
                      <li> When coughing or sneezing, cover your nose and mouth with a tissue or the inside of your elbow</li>
                      <li> Do not touch your eyes, nose, mouth or the easy protection mask with unhygienic hands</li>
                      <li> If you touch your eyes, nose, mouth or mask, always clean your hands as indicated</li>
                      <li> Keep a minimum distance of one meter between people in public and social places. Avoid hugs, kisses and handshakes. Adopt friendly behavior without physical contact, but always with a smile on your face</li>
                      <li> Frequently sanitize the cell phone, children's toys and other objects that are used frequently</li>
                      <li> Do not share personal items such as cutlery, towels, plates and glasses.</li>
                      <li> Keep environments clean and well ventilated</li>
                      <li> Avoid unnecessary circulation in the streets, stadiums, theaters, shopping malls, shows, cinemas and churches</li>
                      <li> If you are sick, avoid close contact with other people, especially the elderly and chronically ill, seek guidance through the online channels provided by SUS or attendance at health services and follow the recommendations of the health professional</li>
                      <li> Sleep well and eat healthy</li>
                      <li> The use of masks is recommended in all environments. Fabric masks (homemade, handcrafted) are not Individual Protection Equipment (PPE), but can act as a physical barrier, especially against the exit of potentially contaminated droplets</li>
                  </ul>
                  <Typography variant="h6" component="h2">
                      What is the influence of air pollution on COVID-19?
                  </Typography>

                  <p> Air pollution is a contributing and hidden factor in the worsening global burden of deaths related to COVID-19. Pollution can be measured in several ways, the most common being particulate matter, ranging from PM 2.5 to PM 10 varying in size.</p>
                  <p> PMs, which can be found in cities with high levels of air pollution, are used by the virus for transmission, that is, in a city with polluted air, airborne disease transmissions are more common.</p>
                  <p> As for pollution inside houses and apartments, this is due to factors such as the use of poorly designed stoves, refrigerators and poor ventilation. And that causes the same problems, an air rich in harmful pollutants, but this time inside your own home.</p>

              </CardContent>
          </Card>
        </Grid>
          <Grid item xs={3} >
              <Card className={classes.root}>
                  <CardContent >
                      <Typography variant="h5" component="h2">
                          References
                      </Typography>
                        <ul>
                            <li><a href="https://coronavirus.saude.gov.br/sobre-a-doenca">https://coronavirus.saude.gov.br/sobre-a-doenca</a></li>
                            <li>Gupta, A., Bherwani, H., Gautam, S. et al. Air pollution aggravating COVID-19 lethality? Exploration in Asian cities using statistical models. Environ Dev Sustain (2020). <a
                                href="https://doi.org/10.1007/s10668-020-00878-9">https://doi.org/10.1007/s10668-020-00878-9</a></li>
                        </ul>
                  </CardContent>
              </Card>
          </Grid>
    </Grid>
};


export default CovidArticle;