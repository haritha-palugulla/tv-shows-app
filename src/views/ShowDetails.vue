<template>
    <main>
        <ShowItemDetails v-if="isMounted" :showInfo="showDetails" />
    </main>
</template>

<script>
import ShowItemDetails from '@/components/ShowItemDetails.vue'
import * as shows from "@/modules/shows";

export default {
    name: 'ShowDetailsView',
    props: {
        id: String
    },
    components: {
        ShowItemDetails
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
