import {configure} from '@kadira/storybook';
import InjectTapEventPlugin from 'react-tap-event-plugin';

InjectTapEventPlugin();

function loadStories() {
	require('../.stories/Layouts');
	require('../.stories/Tables');
	require('../.stories/Forms');
}

configure(loadStories, module);
