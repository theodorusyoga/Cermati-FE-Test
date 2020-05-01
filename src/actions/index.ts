import { action } from 'typesafe-actions';
import { Constants, HighlightContents } from '../store/types';
import { faComments } from '@fortawesome/free-regular-svg-icons';
import { faPaintBrush, faCubes, faBullhorn, faStream, faChartLine } from '@fortawesome/free-solid-svg-icons';

export function getHighlights() {
    const highlights: HighlightContents = [{
        title: 'Consult',
        description: 'Co-create, design thinking; strengthen infrastructure resist granular. Revolution circular, movements or framework social impact low-hanging fruit. Save the world compelling revolutionary progress.',
        icon: faComments
    }, {
        title: 'Design',
        description: 'Policymaker collaborates collective impact humanitarian shared value vocabulary inspire issue outcomes agile. Overcome injustice deep dive agile issue outcomes vibrant boots on the ground sustainable.',
        icon: faPaintBrush
    }, {
        title: 'Develop',
        description: 'Revolutionary circular, movements a or impact framework social impact low-hanging. Save the compelling revolutionary inspire progress. Collective impacts and challenges for opportunities of thought provoking.',
        icon: faCubes
    }, {
        title: 'Marketing',
        description: 'Peaceful; vibrant paradigm, collaborative cities. Shared vocabulary agile, replicable, effective altruism youth. Mobilize commitment to overcome injustice resilient, uplift social transparent effective.',
        icon: faBullhorn
    }, {
        title: 'Manage',
        description: 'Change-makers innovation or shared unit of analysis. Overcome injustice outcomes strategize vibrant boots on the ground sustainable. Optimism, effective altruism invest optimism corporate social.',
        icon: faStream
    }, {
        title: 'Evolve',
        description: 'Activate catalyze and impact contextualize humanitarian. Unit of analysis overcome injustice storytelling altruism. Thought leadership mass incarceration. Outcomes big data, fairness, social game-changer.',
        icon: faChartLine
    }]
    return action(Constants.ADD_HIGHLIGHTS, {
        item: highlights
    })
}