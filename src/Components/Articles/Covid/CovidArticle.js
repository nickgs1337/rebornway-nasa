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
                  O que é a COVID-19?
                  </Typography>

                  <iframe
                      id="embedded-human"
                      frameBorder="0"
                      width="700"
                      height="550"
                      allowFullScreen="true"
                      src="https://human.biodigital.com/viewer/?be=3vNO&ui-info=true&ui-search=true&ui-reset=true&ui-fullscreen=true&ui-nav=true&ui-tools=true&ui-help=true&ui-chapter-list=false&ui-label-list=true&ui-anatomy-descriptions=false&ui-tutorial=false&ui-loader=bar&ui-whiteboard=true&disable-scroll=false&uaid=6hfuh">
                  </iframe>

                  <br/>

                  Os primeiros casos do coronavírus (COVID-19) tiveram origem no mercado de frutos do mar da cidade de Wuhan localizada na China, as primeiras ocorrências foram relatadas na virada do ano 31/12/2020 e a incidência aumentou exponencialmente nas primeiras semanas.

                  <br/>

                  <Typography variant="h6" component="h2">
                      Quantos casos há no mundo?
                  </Typography>

                  <CovidInfectionMap/>

                  <br/>
                  <p>
                      <Typography variant="h6" component="h2">
                        Quais são os sinais e sintomas?
                      </Typography>

                      <ul style={{
                          marginTop: 0,
                      }}>
                          <li> Tosse</li>
                          <li> Febre</li>
                          <li> Coriza</li>
                          <li> Dor de garganta</li>
                          <li> Dificuldade para respirar</li>
                          <li> Perda de olfato (anosmia)</li>
                          <li> Alteração do paladar (ageusia)</li>
                          <li> Distúrbios gastrintestinais (náuseas/vômitos/diarreia)</li>
                          <li> Cansaço (astenia)</li>
                          <li> Diminuição do apetite (hiporexia)</li>
                          <li> Dispnéia (falta de ar)</li>
                      </ul>
                  </p>

                  <Typography variant="h6" component="h2">
                      Como é a transmissão?
                  </Typography>


                  <ul style={{
                      marginTop: 0,
                  }}>
                      <li> Toque do aperto de mãos contaminadas</li>
                      <li> Gotículas de saliva</li>
                      <li> Espirro</li>
                      <li> Tosse</li>
                      <li> Catarro</li>
                      <li> Objetos ou superfícies contaminadas, como celulares, mesas, talheres, maçanetas, brinquedos, teclados de computador</li>
                  </ul>
                  <img src={CovidTransmissao} alt=""/>

                  <Typography variant="h6" component="h2">
                  Qual o diagnóstico?
                  </Typography>

                  <p> <b>1 - O DIAGNÓSTICO CLÍNICO</b><br/>
                  É realizado pelo médico atendente, que deve avaliar a possibilidade da doença, principalmente, em pacientes com a associação dos seguintes sinais e sintomas:
                  <ul>
                      <li> Febre, que pode estar presente no momento do exame clínico ou referida pelo paciente (sensação febril) de ocorrência recente</li>
                      <li> Sintomas do trato respiratório (por exemplo, tosse, dispneia, coriza, dor de garganta)</li>
                      <li> Outros sintomas consistentes incluindo, mialgias, distúrbios gastrointestinais (diarreia/náuseas/vômitos), perda ou diminuição do olfato (anosmia) ou perda ou diminuição do paladar (ageusia)</li>
                  </ul>
                  </p>
                  <p> <b>2 - O DIAGNÓSTICO CLÍNICO-EPIDEMIOLÓGICO</b><br/>
                  É realizado pelo médico atendente no qual considera-se:
                  <ul>
                      <li> Casos de paciente com a associação dos sinais e sintomas supracitados ou SRAG mais histórico de contato próximo ou domiciliar, nos últimos 14 dias antes do aparecimento dos sintomas, com caso confirmado laboratorialmente para COVID-19 e para o qual não foi possível realizar a investigação laboratorial específica</li>
                  </ul>
                  </p>
                  <p> <b>3 - DIAGNÓSTICO CLÍNICO-IMAGEM:</b><br/>
                  <ul>
                      <li> Caso de sintomas respiratório mais febre ou SRAG ou óbito por SRAG que não foi possível confirmar ou descartar por critério laboratorial E que apresente alterações tomográficas.</li>
                  </ul>
                  </p>
                  <p> <b>4 - DIAGNÓSTICO LABORATORIAL</b><br/>
                  Caso o paciente apresente os sintomas respiratórios mais febre ou SRAG. O profissional de saúde poderá solicitar os seguintes exames laboratoriais:
                  <ul>
                      <li> De biologia molecular, (RT-PCR em tempo real) que diagnostica tanto a COVID-19, a Influenza ou a presença de Vírus Sincicial Respiratório (VSR) normalmente até o oitavo dia de início de sintomas</li>
                      <li> Imunológico, que detecta, ou não, a presença de anticorpos em amostras coletadas a partir do oitavo dia de início dos sintomas. Sendo eles:</li>
                      <li> Ensaio imunoenzimático (Enzyme-Linked Immunosorbent Assay - ELISA)</li>
                      <li> Imunocromatografia (teste rápido) para detecção de anticorpos</li>
                      <li> Imunoensaio por Eletroquimioluminescência (ECLIA)</li>
                      <li> Pesquisa de antígenos: resultado reagente para SARS-CoV-2 pelo método de Imunocromatografia para detecção de antígeno</li>
                  </ul>
                  </p>
                  <p> <b>5 - DIAGNÓSTICO LABORATORIAL EM INDIVÍDUO ASSINTOMÁTICO (pessoa sem sintomas) que realizou:</b><br/>
                  <ul>
                      <li>Exame de Biologia Molecular com resultado DETECTÁVEL para SARS-CoV-2 realizado pelo método RT-PCR em tempo real</li>
                      <li>Exame de Imunológico com resultado REAGENTE para IgM e/ou IgA realizado pelos seguintes métodos:  Ensaio imunoenzimático (ELISA) e Imunocromatografia (teste rápido) para detecção de anticorpos</li>
                  </ul>
                  </p>
                  <Typography variant="h6" component="h2">
                  Qual a prevenção?
                  </Typography>

                  <ul>
                      <li> Lave com frequência as mãos até a altura dos punhos, com água e sabão, ou então higienize com álcool em gel 70%. Essa frequência deve ser ampliada quando estiver em algum ambiente público (ambientes de trabalho, prédios e instalações comerciais, etc), quando utilizar estrutura de transporte público ou tocar superfícies e objetos de uso compartilhado</li>
                      <li> Ao tossir ou espirrar, cubra nariz e boca com lenço ou com a parte interna do cotovelo</li>
                      <li> Não tocar olhos, nariz, boca ou a máscara de proteção fácil com as mãos não higienizadas</li>
                      <li> Se tocar olhos, nariz, boca ou a máscara, higienize sempre as mãos como já indicado</li>
                      <li> Mantenha distância mínima de 1 (um) metro entre pessoas em lugares públicos e de convívio social. Evite abraços, beijos e apertos de mãos. Adote um comportamento amigável sem contato físico, mas sempre com um sorriso no rosto.</li>
                      <li> Higienize com frequência o celular, brinquedos das crianças e outro objetos que são utilizados com frequência</li>
                      <li> Não compartilhe objetos de uso pessoal como talheres, toalhas, pratos e copos</li>
                      <li> Mantenha os ambientes limpos e bem ventilados</li>
                      <li> Evite circulação desnecessária nas ruas, estádios, teatros, shoppings, shows, cinemas e igrejas</li>
                      <li> Se estiver doente, evite contato próximo com outras pessoas, principalmente idosos e doentes crônicos, busque orientação pelos canais on-line disponibilizados pelo SUS ou atendimento nos serviços de saúde e siga as recomendações do profissional de saúde</li>
                      <li> Durma bem e tenha uma alimentação saudável</li>
                      <li> Recomenda-se a utilização de máscaras em todos os ambientes.  As máscaras de tecido (caseiras/artesanais), não são Equipamentos de Proteção Individual (EPI), mas podem funcionar como uma barreira física, em especial contra a saída de gotículas potencialmente contaminadas</li>
                  </ul>
                  <Typography variant="h6" component="h2">
                  Qual a influência da poluição atmosférica no COVID-19?
                  </Typography>

                  <p> A poluição do ar é um fator contribuinte e oculto no agravamento da carga global de mortes relacionadas ao COVID-19. Poluição pode ser medida de várias formas, a mais comum são as matérias particuladas, que variam de PM 2.5 até PM 10 variando em tamanho.</p>
                  <p> As PMs, que podem ser encontradas em cidades com altos índices de poluição do ar, são utilizadas pelo vírus para a transmissão, ou seja, em uma cidade com o ar poluído as transmissões da doença pelo ar são mais comuns.</p>
                  <p> Acerca da poluição no interior de casas e apartamentos isso ocorre devido a fatores como uso de fogões mal projetados, geladeiras e ventilação deficiente. E isso acarreta os mesmo problemas, um ar rico em poluentes nocivos dessa vez dentro da sua própria residência.</p>

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