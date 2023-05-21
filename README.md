# product-id-platform-FVM

## Inspiration
 "While moving to renewables can address 55% of global GHG emissions, to achieve UN climate goals it is imperative to tackle the remaining 45%" (Ellen MacArthur Foundation)
Product emission has been largely overlooked, although it accounts for 45% of the global GHG emissions. Veritas-ID.org (Veritas ID, V-ID) is an open-source Digital Product ID platform, under MIT/Apache licenses. Veritas-ID.org offers Digital Product IDs as service, to trace, analyze, and report data about a product’s full lifecycle, from manufacturing to consumption, and from reuse to disposal.
## What it does
Built on the Veritas-ID.org platform, in this hackathon, we have explored the applications of Filecoin Virtual Machine (FVM) as a reporting engine to ensure verifiability of climate emissions reports, which play critical roles in ensuring brands’ social commitment and regulation requirements. Unlike others who use ‘guesswork’ like estimation, to generate reports that may be error-prone or ‘green-washing’, our reports are generated from trusted and transparent data recorded on DLT (Distributed Ledger Technologies). This allows our compliance reports to be trusted, transparent and verifiable across a brand’s value chain.
## How we built it
As shown below, the high-level architecture of the reporting engine, which is based on Filecoin Virtual Machine (FVM), acts as an extension of the Veritas-ID.org digital product ID platform.



By analysing the data on the IPFS system, we planned to get insights by allowing third-party applications to gain access via FVM. Essentially, we planned FVM to be an automated gateway to allow integration with external applications. We are keen to explore better options, for scalability purposes.
## Challenges we ran into
Due to the time and resource constraints, we have not implemented all the features or functions highlighted in the system. 
The additional complexity of the ChainLink made it difficult to integrate with other systems, including: 
(1) Building external adapters 
(2) Running ChainLink node
(3) Setup Node jobs
We also spent lots of time on understanding the full features of FVM, to make the best use of the technologies. 
Therefore, the application is not yet fully functional. We will continue working on improving the application, post the Hackathorn. 
## Accomplishments that we're proud of
Our team was able to develop a high-level proof-of-concept system in a relatively short time.  Our team is distributed in Australia and Germany, with different time-zones, and even different seasons : ) However, we managed to complete an architecture and prototype in time. We are also proud of building stronger confidence in integrating IPFS with FVM, after few iterations of testing and feedback.
## What we learned
We have learned valuable lessons from this hackathon. We are super interested in the FVM’s features, and have been exploring potential use cases in climate reporting, which requires trust and transparency. We believe that in addition to the trusted data recorded on blockchain (IPFS/Co2.storage), the process of generating insights from the data will also need to be trusted and transparent. Therefore, we have been exploring if FVM (or future releases) would meet such requirements.
 ## What's next for Veritas-ID.org
We are building a purpose-driven global community to close-the-loop for circular economy. Our open-source project is developed and maintained under MIT/Apache licenses. Everyone is welcome to contribute, and use the software for free. Our mission is to contribute to the global effort of developing “the supporting technologies for responsible consumption and production, to reduce 40-70% of GHG emissions by 2050 (IPCC)”.


