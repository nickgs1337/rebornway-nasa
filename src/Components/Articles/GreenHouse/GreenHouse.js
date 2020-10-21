import React from "react";
import CardContent from "@material-ui/core/CardContent";
import Card from "@material-ui/core/Card";
import {makeStyles} from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import ReactPlayer from "react-player";
import Typography from "@material-ui/core/Typography";
import forest_firer from "../ForestFires/forest_firer.png";
import Iframe from "react-iframe";
import Glaciers_are_melting from "./img/glacial_melting.png";
import Temp_rise from "./img/temperature_rise.png";
import DicasVacina from "../../OurRecommendations/dicas-vacina.jpg";
import sealevel from "./img/sealevel.jpg";
import cloudflorest from "./img/cloudflorest.jpg";
import greenhouse from "./img/cloudflorest.jpg";
import extremeevents from "./img/extremeevents.png";
import decline from "./img/decline.jpg";
import warming_ocean from "./img/warming_ocean.jpg";
import will_polar from "./img/will_polar.jpg";
import temperaturef from "./img/temperature.jpg";
import frost_free from "./img/frost_free.jpg";
import change_preciptation from "./img/change_preciptation.jpg";
import droughts from "./img/droughts.jpeg";
import hurricanes from "./img/Hurricanes.jpg";
import sea_levels from "./img/sea_levels.jpg";

import rink from "./videos/5_Rink_Glacier.mp4";
import store_calving from "./videos/19_Store_Calving.mp4";
import store from "./videos/21_Store_Glacier.mp4";
import ilusisat from "./videos/22_Ilulissat_Glacier.mp4";
import solheim from "./videos/24_Solheim_Glacier.mp4";
import svinafell from "./videos/23_Svinafellsjokull_Time.mp4";

import polo_artic from "./img/Arctic.jpg";
import FlipCard from "./FlipCard";
import video_4 from "./site_4.mp4";
import video_artic from "./videos/Annual_Arctic.mp4";
import temperature from "./temperature.mp4";
import Trailer from "../../OurTeam/trailer.mp4";
import Coral1 from "../WaterPollution/coral-bg-1.jpg";
import Coral2 from "../WaterPollution/coral-bg-2.jpg";
import RecommendationVideo from "./Recommendation";
import DicasRespirador from "../../OurRecommendations/dicas-respirador.png";
import DicasAtividades from "../../OurRecommendations/dicas-atividades.jpg";
import DicasAlimentacao from "../../OurRecommendations/dicas-alimentacao.jpg";
import DicasTemperatura from "../../OurRecommendations/dicas-temperatura.jpg";
import DicasPano from "../../OurRecommendations/dicas-pano.png";
import DicasPoeira from "../../OurRecommendations/dicas-poeira.jpg";
import DicasAgua from "../../OurRecommendations/dicas-agua.jpg";
import DicasRoupa from "../../OurRecommendations/dicas-roupa.jpg";
import DicasMedico from "../../OurRecommendations/dicas-medico.jpg";

const useStyles = makeStyles({
    root: {
        minWidth: 275,
    }
});

const GreenHouse = () => {

  const classes = useStyles();
  return <Grid container spacing={3}>
          <Grid item xs={12} >
              <Card className={classes.root}>
                  <CardContent >
                      <Typography variant="h4" component="h2">
                          Global Warming and Greenhouse Effect
                      </Typography>
                      <br />
                      <br />
                      <Typography variant="h6" component="h2">
                          What is the greenhouse effect?
                      </Typography>
                      <br />

                      The "greenhouse effect" is the warming that happens when certain gases in Earth's atmosphere trap heat, which is a natural phenomenon that keeps the Earth's climate livable. These gases let in light but keep heat from escaping, like the glass walls of a greenhouse, hence the name. Scientists have known about this event since 1824, when Joseph Fourier calculated that the Earth would be much colder if it had no atmosphere.
                      <p />
                      Sunlight shines onto the Earth's surface, where the energy is absorbed and then radiates back into the atmosphere as heat. In the atmosphere, greenhouse gas molecules trap some of the heat, and the rest escapes into space. The more greenhouse gases concentrate in the atmosphere, the more heat gets locked up in the molecules.

                      <br />
                      <br />
                      <Typography variant="h6" component="h2">
                          What is global warming?
                      </Typography>
                      <br />
                      Global warming is the long-term heating of Earth’s climate system observed since the pre-industrial period (between 1850 and 1900) due to human activities, primarily fossil fuel burning, which increases heat-trapping greenhouse gas levels in Earth’s atmosphere. The term is frequently used interchangeably with the term climate change, though the latter refers to both human and naturally produced warming and the effects it has on our planet. It is most commonly measured as the average increase in Earth’s global surface temperature.

                      <br />
                      <br />
                      <Typography variant="h6" component="h2">
                          What is the evidence?
                      </Typography>

                      <Grid container spacing={3}>
                          <Grid item xs={6}>
                              <Grid container spacing={3}>
                                  <Grid item xs={12}>
                                      <FlipCard
                                          name={"Glaciers are melting"}
                                          description={"The Greenland and Antarctic ice sheets have decreased in mass. Data from NASA’s Gravity Recovery and Climate Experiment show Greenland lost an average of 279 billion tons of ice per year between 1993 and 2019, while Antarctica lost about 148 billion tons of ice per year. Glaciers are retreating almost everywhere around the world."}
                                          image={Glaciers_are_melting}
                                      />
                                  </Grid>
                                  <Grid item xs={12}>
                                      <FlipCard
                                          name={"Global temperature rise"}
                                          description={"The planet’s average surface temperature has risen about 2.05 degrees Fahrenheit (1.14 degrees Celsius) since the late 19th century."}
                                          image={Temp_rise}
                                      />
                                  </Grid>
                                  <Grid item xs={12}>
                                      <FlipCard
                                          name={"Sea levels are rising"}
                                          description={"Global sea level rose about 8 inches (20 centimeters) in the last century. The rate in two decades, however, is nearly double that of the last century."}
                                          image={sealevel}
                                      />
                                  </Grid>
                                  <Grid item xs={12}>
                                      <FlipCard
                                          name={"Cloud forests are dying"}
                                          description={"In cloud forests, big trees use their branches and crowns to rake the mist and capture water droplets. Global warming clouds push clouds up to higher elevations depriving them of sources of moisture. The danger is that the oldest, largest trees will die and not be replaced."}
                                          image={cloudflorest}
                                      />
                                  </Grid>
                              </Grid>
                          </Grid>
                          <Grid item xs={6}>
                              <Grid container spacing={3}>
                                  <Grid item xs={12}>
                                      <FlipCard
                                          name={"Increase in greenhouse gases"}
                                          description={"Greenhouse gases, their levels are higher now than at any time in the last 800,000 years."}
                                          image={greenhouse}
                                      />
                                  </Grid>
                                  <Grid item xs={12}>
                                      <FlipCard
                                          name={"Extreme events"}
                                          description={"The number of record high temperatures events in the United States has been increasing, while the number of record low temperatures events has been decreasing, since 1950."}
                                          image={extremeevents}
                                      />
                                  </Grid>
                                  <Grid item xs={12}>
                                      <FlipCard
                                          name={"Declining Arctic sea ice"}
                                          description={"Both the extent and thickness of Arctic sea ice has declined rapidly over the last several decades."}
                                          image={decline}
                                      />
                                  </Grid>
                                  <Grid item xs={12}>
                                      <FlipCard
                                          name={"Warming ocean"}
                                          description={"The ocean has absorbed much of this increased heat with the top 328 feet (100 meters) of ocean showing warming of more than 0.6 degrees Fahrenheit (0.33 degrees Celsius) since 1969. Earth stores 90% of the extra energy in the ocean."}
                                          image={warming_ocean}
                                      />
                                  </Grid>
                              </Grid>
                          </Grid>
                      </Grid>

                      <br />
                      <br />
                      <Typography variant="h6" component="h2">
                          What is climate change?
                      </Typography>
                      <br />

                      Climate change is a long-term change in the average weather patterns that have come to define Earth’s local, regional and global climates.
                      <p />
                      Changes observed in Earth’s climate since the early 20th century are primarily driven by human activities, particularly fossil fuel burning, which increases heat-trapping greenhouse gas levels in Earth’s atmosphere, raising Earth’s average surface temperature. These human-produced temperature increases are commonly referred to as global warming. Natural processes can also contribute to climate change, including internal variability and external forcings.

                      <br />
                      <br />
                      <Typography variant="h6" component="h2">
                          Aren’t temperature changes normal?
                      </Typography>
                      <br />

                      Human activity, such as land use change, isn't the only factor that affects Earth's climate. Volcanic eruptions and variations in solar radiation from sunspots, solar wind, and the Earth's position relative to the sun also play a role. So do large-scale weather patterns such as El Niño, and all these factors are taken into account by scientists to monitor Earth’s temperatures.
                      <p />
                      For thousands of years now, emissions of greenhouse gases to the atmosphere have been balanced out by greenhouse gases that are naturally absorbed. As a result, greenhouse gas concentrations and temperatures have been fairly stable, which has allowed human civilization to flourish within a consistent climate.
                      <p />
                      Now, humans have increased the amount of these gases more than a third since the Industrial Revolution. Changes that have historically taken thousands of years are now happening over the course of decades, out of normal rhythm.

                      <p />

                      <center>
                      <ReactPlayer
                          controls={true}
                          width={"60%"}
                          height={"50%"}
                          playing={false}
                          pip={false}
                          muted={true}
                          url={temperature}
                          loop={true}/>

                      </center>
                      <br />
                      <br />
                      <Typography variant="h6" component="h2">
                          Why does this matter?
                      </Typography>
                      <br />

                      The rapid rise in greenhouse gases is a problem because it’s changing the climate faster than some living things can adapt to. Also, a new and more unpredictable climate poses unique challenges to all life.

                      <br />
                      <br />
                      <Typography variant="h6" component="h2">
                          What are the gases that constitute the greenhouse effect?
                      </Typography>
                      <br />

                      Some gases in particular collaborate for this effect, such as water vapor, which increases the Earth's heat levels, but so increases the possibility of clouds and precipitation, representing one of the most important feedback mechanisms.
                      <p />
                      Other gases that accelerate the process of global warming, of human and natural emission are carbon dioxide (CO2), methane, chlorofluorocarbons (CFCs), nitrous oxide, the causes for the increase in the levels of these gases in the atmosphere, vary from industrial emission, fossil fuel combustion, deforestation, decomposition of wastes in landfills, burning fossil fuels and even volcano eruptions.

                      <Grid container spacing={3}>
                          <Grid item xs={6}>
                              <Grid container spacing={3}>
                                  <Grid item xs={12}>
                                      <FlipCard
                                          name={"Change will continue through this century and beyond"}
                                          description={"Global climate is projected to continue to change over this century and beyond. The magnitude of climate change beyond the next few decades depends primarily on the amount of heat-trapping gases emitted globally, and how sensitive the Earth’s climate is to those emissions."}
                                          image={will_polar}
                                      />
                                  </Grid>
                                  <Grid item xs={12}>
                                      <FlipCard
                                          name={"Temperatures will continue to rise"}
                                          description={"Because human-induced warming is superimposed on a naturally varying climate, the temperature rise has not been, and will not be, uniform or smooth over time."}
                                          image={temperaturef}
                                      />
                                  </Grid>
                                  <Grid item xs={12}>
                                      <FlipCard
                                          name={"Frost-free season (and growing season) will lengthen"}
                                          description={"The length of the frost-free season (and the corresponding growing season) has been increasing nationally since the 1980s, with the largest increases occurring in the western United States, affecting ecosystems and agriculture. Across the United States, the growing season is projected to continue to lengthen."}
                                          image={frost_free}
                                      />
                                  </Grid>
                                  <Grid item xs={12}>
                                      <FlipCard
                                          name={"Changes in precipitation patterns"}
                                          description={"Average U.S. precipitation has increased since 1900, but some areas have had increases greater than the national average, and some areas have had decreases. Projections of future climate over the U.S. suggest that the recent trend towards increased heavy precipitation events will continue."}
                                          image={change_preciptation}
                                      />
                                  </Grid>
                              </Grid>
                          </Grid>
                          <Grid item xs={6}>
                              <Grid container spacing={3}>
                                  <Grid item xs={12}>
                                      <FlipCard
                                          name={"More droughts and heat waves"}
                                          description={"Droughts in the Southwest and heat waves (periods of abnormally hot weather lasting days to weeks) everywhere are projected to become more intense, and cold waves less intense everywhere at U.S. Also summer temperatures are projected to continue rising, and a reduction of soil moisture, which exacerbates heat waves, is projected for much of the western and central U.S. in summer."}
                                          image={droughts}
                                      />
                                  </Grid>
                                  <Grid item xs={12}>
                                      <FlipCard
                                          name={"Hurricanes will become stronger and more intense"}
                                          description={"The intensity, frequency and duration of North Atlantic hurricanes, as well as the frequency of the strongest (category 4 and 5) hurricanes, have all increased since the early 1980s. The relative contributions of human and natural causes to these increases are still uncertain. Hurricane-associated storm intensity and rainfall rates are projected to increase as the climate continues to warm."}
                                          image={hurricanes}
                                      />
                                  </Grid>
                                  <Grid item xs={12}>
                                      <FlipCard
                                          name={"Sea level will rise 1-8 feet by 2100"}
                                          description={"Global sea level has risen by about 8 inches since reliable record keeping began in 1880. It is projected to rise another 1 to 8 feet by 2100. This is the result of added water from melting land ice and the expansion of seawater as it warms. In the next several decades, storm surges and high tides could combine with sea level rise and land subsidence to further increase flooding in many regions."}
                                          image={sea_levels}
                                      />
                                  </Grid>
                                  <Grid item xs={12}>
                                      <FlipCard
                                          name={"Arctic likely to become ice-free"}
                                          description={"The Arctic Ocean is expected to become essentially ice free in summer before mid-century."}
                                          image={polo_artic}
                                      />
                                  </Grid>
                              </Grid>
                          </Grid>
                      </Grid>

                  </CardContent>

              </Card>
          </Grid>

      <Grid item xs={12} >
          <Card className={classes.root}>
              <CardContent >
                  <Typography variant="h5" component="h2">
                      Sea Level
                  </Typography>

                  <p />

                  <center>
                  <ReactPlayer
                      controls={true}
                      width={"60%"}
                      height={"50%"}
                      playing={false}
                      pip={false}
                      muted={true}
                      url={video_4}
                      loop={true}/>
                  </center>

                  <p />


              </CardContent>
          </Card>
      </Grid>

      <Grid item xs={12} >
          <Card className={classes.root}>
              <CardContent >

                  <Typography variant="h5" component="h2">
                      Arctic
                  </Typography>

                  <p />

                  <center>
                  <ReactPlayer
                      controls={true}
                      width={"60%"}
                      height={"50%"}
                      playing={false}
                      pip={false}
                      muted={true}
                      url={video_artic}
                      loop={false}/>
                  </center>
              </CardContent>
          </Card>
      </Grid>

      <Grid item xs={12} >
          <Card className={classes.root}>
              <CardContent >

                  <Typography variant="h5" component="h2">
                      Greenland and Iceland
                  </Typography>

                  <p />

                  <Grid container spacing={3}>
                      <Grid item xs={6}>
                          <Grid container spacing={3}>
                              <Grid item xs={12}>
                                  <RecommendationVideo
                                      name={"Rink Glacier, June 2007 - May 2008"}
                                      description={"Rink Glacier is well above the Arctic Circle where temperatures remain extremely cold for weeks at a time. Yet all through the winter, Rink Glacier actively releases immense ice islands that survive longer in the cold, spinning around for weeks before they are ground up by the sea ice and eventually make their way down through the fjord after spring breakup. Rink Glacier produces 11-17 cubic kilometers of ice per year."}
                                      image={rink}
                                  />
                              </Grid>
                              <Grid item xs={12}>
                                  <RecommendationVideo
                                      name={"Store Glacier Calving, June 9, 2007"}
                                      description={"This sequence shows a nine-minute-long calving event, the collapse of a glacier ice into the sea. A promontory of ice sticks out from the edge of the glacier about to break off. After an avalanche of debris, a large chunk of ice splits off and another piece that was under it splinters below the waterline and pops up to the surface."}
                                      image={store_calving}
                                  />
                              </Grid>
                              <Grid item xs={12}>
                                  <RecommendationVideo
                                      name={"Store Glacier, June 2007 - July 2008"}
                                      description={"Store Glacier is 5.5 km wide at its front. It discharges 14 - 18 cubic kilometers of ice per year and is ranked 2nd or 3rd in iceberg production for western Greenland."}
                                      image={store}
                                  />
                              </Grid>
                          </Grid>
                      </Grid>
                      <Grid item xs={6}>
                          <Grid container spacing={3}>
                              <Grid item xs={12}>
                                  <RecommendationVideo
                                      name={"Ilulissat Glacier, June 2007 - June 2009"}
                                      description={"The Ilulissat Glacier deposits more icebergs, 35-50 cubic kilometers per year, into the ocean than any other glacier in the northern hemisphere and is thus Greenland's single largest contributor to global sea level rise. Ilulissat is 6.5 kilometers wide, and the cliff face can be well over 92 meters tall. The glacier flows at a speed of about 38 meters per day, double what it was 10 years ago. The iceberg that sank the \"Titanic\" probably originated here."}
                                      image={ilusisat}
                                  />
                              </Grid>
                              <Grid item xs={12}>
                                  <RecommendationVideo
                                      name={"Solheimajokull, March 2007 - June 2009"}
                                      description={"Solheimajokull is an inland glacier that has retreated 580 meters since 1996. It's receding because of the forces of melting and erosion. Melting deflates the glacier up valley and creates streams, which eat away at the sides of the glacier. These streams also roll underneath the glacier where the heat of the water melts the ice from below. The meltwater collects in the lake, which repeatedly forms and drains in front of the glacier."}
                                      image={solheim}
                                  />
                              </Grid>
                              <Grid item xs={12}>
                                  <RecommendationVideo
                                      name={"Svinafellsjokull, July 2007 - June 2009"}
                                      description={"This is one of many glaciers that drain off one of Iceland's most active volcanoes, the huge Vatnafjll volcano. As the camera moves in closer, notice the flow off the ice fall as it plunges from a few thousand feet above sea level and pours down over the rock cliffs."}
                                      image={svinafell}
                                  />
                              </Grid>
                          </Grid>
                      </Grid>
                  </Grid>
              </CardContent>
          </Card>
      </Grid>

      <Grid item xs={12} >
          <Card className={classes.root}>
              <CardContent >
                  <Typography variant="h5" component="h2">
                      References
                  </Typography>
                  <ul>
                      <li><a
                          href="https://climate.nasa.gov/evidence/">https://climate.nasa.gov/evidence/</a></li>
                      <li><a
                          href="https://climate.nasa.gov/effects/">https://climate.nasa.gov/effects/</a></li>
                      <li><a
                          href="https://climate.nasa.gov/solutions/resources/">https://climate.nasa.gov/solutions/resources/</a></li>
                      <li><a
                          href="https://climate.nasa.gov/resources/global-warming-vs-climate-change/">https://climate.nasa.gov/resources/global-warming-vs-climate-change/</a></li>
                      <li><a
                          href="https://www.nationalgeographic.com/environment/global-warming/global-warming-overview/">https://www.nationalgeographic.com/environment/global-warming/global-warming-overview/</a></li>
                      <li><a
                          href="https://www.environment.gov.au/climate-change/climate-science-data/climate-science/greenhouse-effect">https://www.environment.gov.au/climate-change/climate-science-data/climate-science/greenhouse-effect</a></li>
                      <li><a
                          href="https://www.britannica.com/science/methane-burp-hypothesis">https://www.britannica.com/science/methane-burp-hypothesis</a></li>
                      <li><a
                          href="https://www.britannica.com/science/global-warming/Causes-of-global-warming">https://www.britannica.com/science/global-warming/Causes-of-global-warming</a></li>
                      <li><a
                          href="https://www.scientificamerican.com/article/why-are-glaciers-melting-from-the-bottom-its-complicated/">https://www.scientificamerican.com/article/why-are-glaciers-melting-from-the-bottom-its-complicated/</a></li>
                      <li><a
                          href="https://br.freepik.com/fotos-premium/por-do-sol-no-deserto-do-saara_5860901.htm">https://br.freepik.com/fotos-premium/por-do-sol-no-deserto-do-saara_5860901.htm</a></li>
                      <li><a
                          href="https://www.telegraph.co.uk/news/earth/energy/coal/12088002/RWE-sells-Lynemouth-power-plant-to-EPH-ahead-of-biomass-conversion.html">https://www.telegraph.co.uk/news/earth/energy/coal/12088002/RWE-sells-Lynemouth-power-plant-to-EPH-ahead-of-biomass-conversion.html</a></li>
                      <li><a
                          href="https://www.jpl.nasa.gov/news/news.php?feature=6254">https://www.jpl.nasa.gov/news/news.php?feature=6254</a></li>
                      <li><a
                          href="https://www.crystalinks.com/cloudforests.html">https://www.crystalinks.com/cloudforests.html</a></li>
                      <li><a
                          href="https://www.efinancialcareers.nl/news/2016/02/investment-banking-2015">https://www.efinancialcareers.nl/news/2016/02/investment-banking-2015</a></li>
                      <li><a
                          href="https://www.hakaimagazine.com/news/how-melting-arctic-ice-could-cook-the-tropics/">https://www.hakaimagazine.com/news/how-melting-arctic-ice-could-cook-the-tropics/</a></li>
                      <li><a
                          href="https://www.whoi.edu/know-your-ocean/ocean-topics/climate-ocean/global-warming/">https://www.whoi.edu/know-your-ocean/ocean-topics/climate-ocean/global-warming/</a></li>
                      <li><a
                          href="https://www.bbc.com/news/world-us-canada-42322346">https://www.bbc.com/news/world-us-canada-42322346</a></li>
                      <li><a
                          href="https://www.remotetraveler.com/india-3/indian-climate-and-weather/">https://www.remotetraveler.com/india-3/indian-climate-and-weather/</a></li>
                      <li><a
                          href="https://commons.wikimedia.org/wiki/File:Flickr_-_Nicholas_T_-_Growing_Season_(1).jpg">https://commons.wikimedia.org/</a></li>
                      <li><a
                          href="https://www.nssl.noaa.gov/education/svrwx101/floods/types/">https://www.nssl.noaa.gov/education/svrwx101/floods/types/</a></li>
                      <li><a
                          href="https://time.com/4521057/megadrought-california-climate-change/">https://time.com/4521057/megadrought-california-climate-change/</a></li>
                      <li><a
                          href="https://www.nytimes.com/2020/05/18/climate/climate-changes-hurricane-intensity.html">https://www.nytimes.com/2020/05/18/climate/climate-changes-hurricane-intensity.html</a></li>
                      <li><a
                          href="https://nymag.com/intelligencer/2016/09/new-york-future-flooding-climate-change.html">https://nymag.com/intelligencer/2016/09/new-york-future-flooding-climate-change.html</a></li>
                      <li><a
                          href="https://www.skymetweather.com/content/climate-change/climate-change-ice-free-summer-likely-in-the-arctic-in-20-years/">https://www.skymetweather.com/content/climate-change/climate-change-ice-free-summer-likely-in-the-arctic-in-20-years/</a></li>
                  </ul>
              </CardContent>
          </Card>
      </Grid>

    </Grid>
};


export default GreenHouse;