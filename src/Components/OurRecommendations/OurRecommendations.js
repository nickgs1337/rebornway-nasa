import React from "react";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import Card from "@material-ui/core/Card";
import {makeStyles} from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import DicasRespirador from './dicas-respirador.png'
import DicasAlimentacao from './dicas-alimentacao.png'
import DicasAtividades from './dicas_execicios.png'
import DicasPano from './dicas-pano.png'
import DicasTemperatura from './dicas-temperatura.png'
import DicasVacina from './dicas_vacina.png'
import DicasMedico from './dicas_medico.png'
import DicasPoeira from './dicas-poeira.png'
import DicasRoupa from './dicas-roupa.png'
import DicasAgua from './dicas_agua.png'
import Bike from './bike.png'
import Efficient from './efficient.png'
import Fix from './fix.png'
import Garden from './garden.png'
import Habits from './habits.png'
import Transporte from './transporte.png'
import Recommendation from "./Recommendation";
import transitions from "@material-ui/core/styles/transitions";

const useStyles = makeStyles({
    root: {
        minWidth: 275,
    }
});

const OurRecommendations = () => {

  const classes = useStyles();
    return <Grid container spacing={3}>
        <Grid item xs={12} >
            <Typography
                style={{
                    marginBottom: '16px',
                    textAlign: 'center'
                }}
                variant="h4" component="h2">
                Tips to Avoid Respiratory Problems
            </Typography>
            <Grid container spacing={3}>
                <Grid item xs={6}>
                    <Grid container spacing={3}>
                        <Grid item xs={12}>
                            <Recommendation
                                name={"Use air humidifiers"}
                                description={"Air humidifiers have the function of keeping the humidity level of the environment within the standards, thus facilitating breathing."}
                                image={DicasRespirador}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <Recommendation
                                name={"Get vaccinated"}
                                description={"It is warned that the vaccines that are part of the official vaccination calendar are important especially for the elderly, heart patients, people with diabetes and cancer patients."}
                                image={DicasVacina}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <Recommendation
                                name={"Practice physical activities"}
                                description={"Keeping the body in motion oxygenates the blood, and this is important for the well functioning of the respiratory system."}
                                image={DicasAtividades}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <Recommendation
                                name={"Have a healthy diet"}
                                description={"A well nourished body is more resistant to viruses and bacteria and can prevent respiratory diseases. Bad nutrition allows the body to be subject to disease and has a damaged immune system."}
                                image={DicasAlimentacao}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <Recommendation
                                name={"Avoid sudden changes in temperature"}
                                description={"This sudden change of temperature harms respiratory health. If it is indispensable to refresh the environment, do it with not too low temperatures."}
                                image={DicasTemperatura}
                            />
                        </Grid>

                        <Grid item xs={12}>
                            <Recommendation
                                name={"Public transport is the key in combating air pollution"}
                                description={"Choosing a metro or bus route already greatly reduces your carbon monoxide footprint."}
                                image={Transporte}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <Recommendation
                                name={"Energy efficient vehicles are a viable option too"}
                                description={"For more athletic individuals a bicycle already gets the job done, and for more selective individuals we recommend electric or hybrid cars, and electric bikes and scooters are welcome for more urban areas."}
                                image={Bike}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <Recommendation
                                name={"Vehicles in good condition are more environmentally friendly"}
                                description={"Make sure your tire is full and that your car is in good mechanical condition, so no extra fuel will be spent, avoiding unnecessary pollution."}
                                image={Fix}
                            />
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item xs={6}>
                    <Grid container spacing={3}>
                        <Grid item xs={12}>
                            <Recommendation
                                name={"Clean the house with damp cloths"}
                                description={"The ideal, therefore, is to clean everything with damp cloths, which aggregate the particles and do not allow them to spread through the air. The particles they lift are sensitizing of the respiratory system and stay suspended in the air for up to 48 hours."}
                                image={DicasPano}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <Recommendation
                                name={"Avoid dusty places"}
                                description={"The presence of mold and mites can directly affect the respiratory system through the aspiration of these microorganisms."}
                                image={DicasPoeira}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <Recommendation
                                name={"Hydrate yourself"}
                                description={"Mucociliary function, which is a kind of self-cleaning of the nasal mucosa, needs hydration. If you do not have it, there is mucus retention in the respiratory tract, it is difficult to eliminate the innated microorganisms. This can lead to respiratory diseases."}
                                image={DicasAgua}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <Recommendation
                                name={"Clean stored clothes before using them"}
                                description={"Stored clothes join mold and mites. If they are used immediately when removed from drawers or cabinets, they will certainly cause breathing problems such as asthma rhinitis. The best way to handle clothes is to wash them or leave them stretched out in the sun for a few hours before putting them back into use."}
                                image={DicasRoupa}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <Recommendation
                                name={"Seek medical help whenever necessary."}
                                description={"When suspecting that something in the airways does not go well, chronically, it is important to seek a specialized doctor - otorhinolaryngologist or pulmonologist - to check what it may be."}
                                image={DicasMedico}
                            />
                        </Grid>

                        <Grid item xs={12}>
                            <Recommendation
                                name={"Make your home more green and see the benefits"}
                                description={"Spreading plants around the house helps in natural air filtration, significantly avoiding respiratory ailments. Planting a vegetable garden also helps to reduce overall food costs, in addition to serving as a compost bin for your organic waste."}
                                image={Garden}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <Recommendation
                                name={"Efficient air flow is your best ally"}
                                description={"Pollutants emitted by the incomplete combustion of solid fuels or kerosene for cooking, heating and lighting are associated with serious health risks,by opening  windows to create an airflow, it reduces the amount of air trapped inside the rooms."}
                                image={Efficient}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <Recommendation
                                name={"Healthy habits can really improve your life quality"}
                                description={"Many believe that their actions, such as smoking cigarettes and cigars, or failing to clean their homes will have little consequence. But in the long run, these actions have a major impact on their health, in certain cases leading to serious health conditions or even death. Prevention is the key to longevity."}
                                image={Habits}
                            />
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    </Grid>
};


export default OurRecommendations;