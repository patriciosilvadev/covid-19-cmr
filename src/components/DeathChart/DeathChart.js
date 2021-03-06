import React from 'react';
import {BigLoader} from '../Loader/Loader'
import './DeathChart.scss';
var Highcharts = require('highcharts');  
// Load module after Highcharts is loaded
require('highcharts/modules/map')(Highcharts);

class DeathChart extends React.Component {

    state = {
        loading: true,
        error: "" 
    }
    
    componentDidMount() {
        setTimeout(() => {
            this.setState({loading: false});
            this.displayChart();
        }, 2500);
    }

    displayChart = () => {
        Highcharts.chart('covid-cmr-deathchart', {
            chart: {
                type: 'line'
            },
            title: {
                text: 'Evolution des Décès du COVID-19 au Cameroun'
            },
            subtitle: {
                text: 'Nombre de Décès'
            },
            xAxis: {
                categories: ["Mar 11","Mar 12","Mar 13","Mar 14","Mar 15","Mar 16","Mar 17","Mar 18","Mar 19","Mar 20","Mar 21","Mar 22","Mar 23","Mar 24",
                "Mar 25","Mar 26","Mar 27","Mar 28","Mar 29","Mar 30","Mar 31","Apr 01","Apr 02","Apr 03","Apr 04","Apr 05","Apr 06",
                "Apr 07","Apr 08","Apr 09","Apr 10","Apr 11","Apr 12","Apr 13","Apr 14","Apr 15","Apr 16","Apr 17","Apr 18","Apr 19","Apr 20","Apr 21",
                    "Apr 22","Apr 23","Apr 24","Apr 25","Apr 26","Apr 27","Apr 28","Apr 29","Apr 30","May 1","May 2","May 3","May 4","May 5","May 6","May 7","May 8","May 9",
                    "May 11","May 12","may 13","May 16","May 17","May 20","May 21","May 22","May 23","May 24","May 25","May 26","May 29","May 30","May 31","June 1","June 2","June 3"
                    ,"June 4","June 5","June 6","June 7","June 8","June 9","June 10","June 12","June 13","June 14","June 15","June 18","June 19","June 20","June 21",
                    "June 22","June 23","June 24","June 30"]
            },
            yAxis: {
                title: {
                    text: 'Total des Décès'
                }
            },
            credits: {
                enabled: false
            },
            series: [{
                data: [0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,2,2,6,6,6,6,7,8,9,9,9,9,10,12,12,12,14,14,14,17,22,22,42,42,42,42,43,43,43,53,56,58,59,61,61,
                    64,64,64,64,64,108,108,109,114,125,136,139,140,140,146,154,159,159,165,171,175,185,191,197,199,200,203,205,212,213,213,215,215,221
                    ,273,275,276,277,282,300,301,303,308,313,313,328],
                zoneAxis: 'x',
                lineWidth: 5,
                name: 'Décès',
                color: 'red',
            }],
            responsive: {
                rules: [{
                    condition: {
                        maxWidth: 800
                    },
                    chartOptions: {
                        legend: {
                            layout: 'horizontal',
                            align: 'center',
                            verticalAlign: 'bottom'
                        }
                    }
                }]
            }
        });
    }

    render() {
        const {error, loading} = this.state
        return (
            loading ? <div className="mt-5 pt-4"><BigLoader /></div>:
                error.length ? <div className="alert alert-danger text-center">{error}</div>:
                    <section>
                        <div className="container chart mt-5 pt-3 mb-5">
                            <div className="row">
                                <div id="covid-cmr-deathchart" className="col-sm-12">
                                    
                                </div>
                            </div>
                        </div>
                    </section>
        )
    }
}

export default DeathChart;