<template>
    <main>
        <ShowDetails v-if="isMounted" :showInfo="showDetails" />
    </main>
</template>

<script>
import ShowDetails from '@/components/ShowDetails.vue'
import * as shows from "@/modules/shows";

export default {
    name: 'ShowDetailsView',
    props: {
        id: String
    },
    components: {
        ShowDetails
    },
    data() {
        return {
            showDetails: () => {},
            isMounted: false
        }
    },
    async mounted() {
		this.isMounted = false;
        let self = this;
        await shows.getShow(this.id, (response) => {
            self.showDetails = response;
        });
        this.isMounted = true;
    }
}
</script>
