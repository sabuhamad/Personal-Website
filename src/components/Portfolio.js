"use client";
import { ProbatProviderClient, Experiment } from "@probat/react";
import OriginalComponent from "./Portfolio.original";
import ExperimentVariant from "./Portfolio.experiment";

export default function Portfolio(props) {
  return (
    <ProbatProviderClient userId="a016e79e-d87f-4fe5-8dd9-c9c26fd43fdd">
      <Experiment
        id="65537ff9-6065-437f-902b-f814440c21e1"
        control={<OriginalComponent {...props} />}
        variants={{ experiment: <ExperimentVariant {...props} /> }}
      />
    </ProbatProviderClient>
  );
}
