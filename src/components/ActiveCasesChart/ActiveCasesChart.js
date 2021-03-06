import React from 'react';
import {BigLoader} from '../Loader/Loader'
import './ActiveCasesChart.scss';
var Highcharts = require('highcharts');  
// Load module after Highcharts is loaded
require('highcharts/modules/exporting')(Highcharts);

class ActiveCase extends React.Component {

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
        Highcharts.chart('covid-cmr-active-chart', {
            chart: {
                type: 'line'
            },
            title: {
                text: 'Cas Actifs de COVID-19 au Cameroun'
            },
            subtitle: {
                text: 'Nombre de malades actifs'
            },
            xAxis: {
                categories: ["Mar 01","Mar 02","Mar 03","Mar 04","Mar 05","Mar 06","Mar 07","Mar 08","Mar 09","Mar 10","Mar 11","Mar 12",
                "Mar 13","Mar 14","Mar 15","Mar 16","Mar 17","Mar 18","Mar 19","Mar 20","Mar 21","Mar 22","Mar 23","Mar 24","Mar 25",
                "Mar 26","Mar 27","Mar 28","Mar 29","Mar 30","Mar 31","Apr 01","Apr 02","Apr 03","Apr 04","Apr 05","Apr 06","Apr 07",
                "Apr 08","Apr 09","Apr 10","Apr 11","Apr 12","Apr 13","Apr 14","Apr 15","Apr 16","Apr 17","Apr 18","Apr 19","Apr 20",
                    "Apr 21","Apr 22","Apr 23","Apr 24","Apr 25","Apr 26","Apr 27","Apr 28","Apr 29","Apr 30","May 1","May 4","May 6",
                    "May 7","May 8","May 9","May 11","May 16","May 17","May 20","May 21","May 22","May 23","May 24","May 25","May 26","May 29",
                    "May 30","May 31","June 1","June 2","June 3","June 4","June 5","June 6","June 7","June 8","June 9","June 10","June 12","June 13",
                    "June 14","June 15","June 18","June 19","June 20","June 21","June 22","June 23","June 24","June 30"]
            },
            yAxis: {
                title: {
                    text: 'Total des Cas'
                }
            },
            series: [{
                name: 'Cas',
                data: [0,0,0,0,2,2,2,2,2,2,2,2,3,4,5,10,13,13,25,38,38,54,63,72,72,87,87,128,128,182,217,289,484,
                    529,624,632,616,660,681,730,710,710,720,720,704,666,810,818,670,670,724,724,724,623,668,768,779,842,832,837,837,
                    1074,1060,1138,1157,958,955,1000,1040,1131,1262,1308,1822,1992,2485,2419,2616,2860,2956,3365,2033,2145,2368,2569,2709,
                    2881,2612,2800,2875,3086,3290,3617,3789,3366,3727,4018,3693,2808,3347,3608,3879,3993,4183,2179,1478],
                zoneAxis: 'x',
                color: '#00DDDD',
                lineWidth: 5,
            }]
        });
    }

    render() {
        const {error, loading} = this.state
        return (
            loading ? <div className="mt-5 pt-2"><BigLoader /></div>:
                error.length ? <div className="alert alert-danger text-center">{error}</div>:
                    <section>
                        <div className="container chart mt-5 pt-3 mb-5">
                            <div className="row">
                                <div id="covid-cmr-active-chart" className="col-sm-12">
                                    
                                </div>
                            </div>
                        </div>
                    </section>
        )
    }
}

export default ActiveCase;