import { linkTo } from '@storybook/addon-links';
import 'bootstrap/dist/css/bootstrap.css';

import TeamRandomiser from "../src/components/TeamRandomiser";
import TeamRandomiserCard from "../src/components/TeamRandomiserCard";

export default {
    title: 'Welcome',
};

export const Default = () => ({
    components: { TeamRandomiser },
    template: '<div class="p-2"><team-randomiser :showApp="action" class="w-25" /></div>',
    methods: { action: linkTo('Button') },
});
export const Card = () => ({
    components: { TeamRandomiserCard },
    template: '<div class="p-2"><team-randomiser-card :showApp="action" class="w-25" title="Team randomiser" /></div>',
    methods: { action: linkTo('Button') },
});
