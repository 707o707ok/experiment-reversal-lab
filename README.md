# Experiment Reversal Lab

A small interactive experiment on **Simpson’s paradox** in A/B testing. The variant converts better on mobile and desktop, yet it can look worse overall when it receives more low-converting mobile traffic.

## Run locally

Download or clone this repository and open `index.html` in a browser. Keep `model.js` in the same directory. The demo has no dependencies or external data.

## Try it

| Conversion rate | Control | Variant |
| --- | ---: | ---: |
| Mobile | 10% | 12% |
| Desktop | 30% | 32% |
| Observed (20% vs. 80% mobile) | 26% | 16% |
| Standardized (50% mobile for both arms) | 20% | 22% |

The observed lift is **−10 percentage points**, while the standardized lift is **+2 percentage points**. Set variant mobile traffic to **30%** to make aggregate conversion tie at 26%. Move below 30% and the variant leads overall.

Each aggregate conversion rate is the weighted average of the two device rates. Standardization uses a shared device mix so the comparison no longer changes with the two arms’ observed traffic shares. The reference mix represents a target population. Lift happens to be constant across reference mixes in this example because both device groups improve by exactly two points.

The fixed rates are synthetic expected values. The demo leaves out sample size, sampling uncertainty, and assignment mechanisms. In a real randomized experiment, an unexpected mix imbalance merits an assignment and instrumentation check before interpretation.

Built with AI assistance.
