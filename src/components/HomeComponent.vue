<template>
    <v-row>
        <v-col cols="12">
            <v-slider label="Number of questions" color="warning"></v-slider>
        </v-col>
    </v-row>
    <v-row>
        <v-col cols="12" md="2">
            <v-btn color="primary" @click="generatePDF('ola')">Generate PDF</v-btn>
        </v-col>
    </v-row>
</template>

<script setup>
import { generatePDF } from "../utils/pdf";


</script>
