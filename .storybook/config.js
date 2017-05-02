import {configure} from '@kadira/storybook';
import InjectTapEventPlugin from 'react-tap-event-plugin';

InjectTapEventPlugin();

function loadStories() {
	require('../.stories');
}

configure(loadStories, module);
