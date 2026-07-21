const mermaidGraphs = [
`%%{init: {
'theme': 'base',
'themeVariables': {
  'fontSize': '18px'
}
}}%%
flowchart TD

TITLE["📖 NOTE-1:<br/>ପଦାର୍ଥ କ'ଣ ?"]

TITLE --> INTRO

subgraph INTRO[ ]
direction LR
A["🟡 ଭୂମିକା"]

A --> I1["ପଦାର୍ଥର ଅର୍ଥ ଏଠାରେ<br/>ବୁଝାଯାଇଛି।"]
A --> I2["ଆମ ଚାରିପାଖରେ ଅନେକ<br/>ପ୍ରକାର ବସ୍ତୁ ଅଛି।"]
A --> I3["ସବୁ ବସ୍ତୁ କୌଣସି ନା<br/>କୌଣସି ପଦାର୍ଥରେ ଗଠିତ।"]
end

INTRO --> MAIN

subgraph MAIN[ ]
direction LR
M["🟢 ବ୍ୟାଖ୍ୟା"]

M --> M1["ଘର, ଗଛ, ପଥର, ପାଣି ଓ<br/>ବାୟୁ ସବୁ ପଦାର୍ଥ ଅଟେ।"]
M --> M2["ବସ୍ତୁମାନଙ୍କର ଆକାର,<br/>ଆକୃତି ଓ ରୂପ ଭିନ୍ନ ଅଟେ।"]
M --> M3["ସମସ୍ତ ବସ୍ତୁ ଯେଉଁ ଦ୍ରବ୍ୟରେ<br/>ତିଆରି ହୁଏ ତାହା ପଦାର୍ଥ।"]
M --> M4["ବାୟୁ, ଖାଦ୍ୟ, ପଥର,<br/>ମେଘ ଓ ତାରା ପଦାର୍ଥ ଅଟେ।"]
M --> M5["ଉଦ୍ଭିଦ, ପଶୁ, ଜଳବିନ୍ଦୁ ଓ<br/>ବାଲି କଣିକା ମଧ୍ୟ ପଦାର୍ଥ ଅଟେ।"]
end

MAIN --> CONCLUSION

subgraph CONCLUSION[ ]
direction LR
C["🔵 ନିଷ୍କର୍ଷ"]

C --> C1["ପ୍ରତ୍ୟେକ ପଦାର୍ଥ କିଛି<br/>ସ୍ଥାନ ଅଧିକାର କରେ।"]
C --> C2["ପ୍ରତ୍ୟେକ ପଦାର୍ଥର<br/>ବସ୍ତୁତ୍ୱ ରହିଥାଏ।"]
C --> C3["ପ୍ରତ୍ୟେକ ପଦାର୍ଥର<br/>ଆୟତନ ମଧ୍ୟ ଥାଏ।"]
end

linkStyle 0 stroke-width:0px;
linkStyle 4 stroke-width:0px;
linkStyle 10 stroke-width:0px;

classDef title fill:#FFE082,stroke:#FF6F00,stroke-width:3px,color:#000,font-weight:bold;
classDef intro fill:#BBDEFB,stroke:#1E88E5,stroke-width:2px,font-weight:bold;
classDef body fill:#C8E6C9,stroke:#2E7D32,stroke-width:2px,font-weight:bold;
classDef conclusion fill:#F8BBD0,stroke:#C2185B,stroke-width:2px,font-weight:bold;

class TITLE title;
class A,I1,I2,I3 intro;
class M,M1,M2,M3,M4,M5 body;
class C,C1,C2,C3 conclusion;`,

`%%{init: {
'theme': 'base',
'themeVariables': {
  'fontSize': '18px'
}
}}%%
flowchart TD

TITLE["📖 NOTE-2:<br/>ପଦାର୍ଥ ସମ୍ପର୍କରେ ପ୍ରାଚୀନ ଓ<br/>ଆଧୁନିକ ଧାରଣା"]

TITLE --> INTRO

subgraph INTRO[ ]
direction LR
A["🟡 ଭୂମିକା"]

A --> I1["ମନୁଷ୍ୟ ପୁରାତନ କାଳରୁ<br/>ପଦାର୍ଥକୁ ବୁଝିବାକୁ ଚେଷ୍ଟା କରିଛି।"]
A --> I2["ପଦାର୍ଥ କିପରି ଗଠିତ<br/>ତାହା ଜାଣିବାକୁ ଇଚ୍ଛା କରିଛି।"]
A --> I3["ପ୍ରାଚୀନ ଓ ଆଧୁନିକ ଯୁଗରେ<br/>ଭିନ୍ନ ଭିନ୍ନ ଧାରଣା ଥିଲା।"]
end

INTRO --> MAIN

subgraph MAIN[ ]
direction LR
M["🟢 ବ୍ୟାଖ୍ୟା"]

M --> M1["ପ୍ରାଚୀନ ଭାରତୀୟ ଦାର୍ଶନିକମାନେ<br/>ପଞ୍ଚତତ୍ତ୍ୱ ଧାରଣା ଦେଇଥିଲେ।"]
M --> M2["ମାଟି, ଜଳ, ବାୟୁ,<br/>ଅଗ୍ନି ଓ ଆକାଶ ପଞ୍ଚତତ୍ତ୍ୱ ଅଟେ।"]
M --> M3["ସଜୀବ ଓ ନିର୍ଜୀବ ସବୁ ବସ୍ତୁ<br/>ଏହି ପାଞ୍ଚଟି ଉପାଦାନରେ ଗଠିତ।"]
M --> M4["ପ୍ରାଚୀନ ଗ୍ରୀକ୍ ଦାର୍ଶନିକମାନେ<br/>ମଧ୍ୟ ଏହିପରି ମତ ଦେଇଥିଲେ।"]
M --> M5["ଆଧୁନିକ ବୈଜ୍ଞାନିକମାନେ ପଦାର୍ଥକୁ<br/>ଭୌତିକ ଓ ରାସାୟନିକ ଗୁଣରେ ବିଭକ୍ତ କରିଛନ୍ତି।"]
end

MAIN --> CONCLUSION

subgraph CONCLUSION[ ]
direction LR
C["🔵 ନିଷ୍କର୍ଷ"]

C --> C1["ପ୍ରାଚୀନ କାଳରେ<br/>ପଞ୍ଚତତ୍ତ୍ୱ ଧାରଣା ଥିଲା।"]
C --> C2["ଆଧୁନିକ ବିଜ୍ଞାନ ପଦାର୍ଥକୁ<br/>ଭୌତିକ ଓ ରାସାୟନିକ ଗୁଣରେ ଅଧ୍ୟୟନ କରେ।"]
C --> C3["ବିଜ୍ଞାନ ସମୟ ସହିତ<br/>ନୂଆ ଜ୍ଞାନ ଦେଇଥାଏ।"]
end

linkStyle 0 stroke-width:0px;
linkStyle 4 stroke-width:0px;
linkStyle 10 stroke-width:0px;

classDef title fill:#FFE082,stroke:#FF6F00,stroke-width:3px,color:#000,font-weight:bold;
classDef intro fill:#BBDEFB,stroke:#1E88E5,stroke-width:2px,font-weight:bold;
classDef body fill:#C8E6C9,stroke:#2E7D32,stroke-width:2px,font-weight:bold;
classDef conclusion fill:#F8BBD0,stroke:#C2185B,stroke-width:2px,font-weight:bold;

class TITLE title;
class A,I1,I2,I3 intro;
class M,M1,M2,M3,M4,M5 body;
class C,C1,C2,C3 conclusion;`,

    `%%{init: {
'theme': 'base',
'themeVariables': {
  'fontSize': '18px'
}
}}%%
flowchart TD

TITLE["📖 NOTE-3:<br/>ପଦାର୍ଥ କଣିକାକୁ ନେଇ<br/>ଗଠିତ"]

TITLE --> INTRO

subgraph INTRO[ ]
direction LR
A["🟡 ଭୂମିକା"]

A --> I1["ପଦାର୍ଥର ଗଠନ ବିଷୟରେ<br/>ଭିନ୍ନ ମତ ଥିଲା।"]
A --> I2["ବାଲି ଅନେକ ଛୋଟ<br/>କଣିକାରେ ତିଆରି।"]
A --> I3["ପଦାର୍ଥର ପ୍ରକୃତି ଜାଣିବାକୁ<br/>ଚେଷ୍ଟା କରାଯାଇଥିଲା।"]
end

INTRO --> MAIN

subgraph MAIN[ ]
direction LR
M["🟢 ବ୍ୟାଖ୍ୟା"]

M --> M1["ଦୀର୍ଘ ସମୟ ଧରି<br/>ଦୁଇ ପ୍ରକାର ମତ ଥିଲା।"]
M --> M2["କେତେକଙ୍କ ମତରେ ପଦାର୍ଥ<br/>ଅବିଚ୍ଛିନ୍ନ ଅଟେ।"]
M --> M3["କାଠ, କାଚ ଓ କାଗଜ<br/>ଏହାର ଉଦାହରଣ ଥିଲା।"]
M --> M4["ଅନ୍ୟମାନଙ୍କ ମତରେ ପଦାର୍ଥ<br/>କଣିକାକୁ ନେଇ ଗଠିତ।"]
M --> M5["ବାଲି ଏହାର ଉଦାହରଣ।<br/>ସତ୍ୟ ଜାଣିବାକୁ ପରୀକ୍ଷା ଦରକାର।"]
end

MAIN --> CONCLUSION

subgraph CONCLUSION[ ]
direction LR
C["🔵 ନିଷ୍କର୍ଷ"]

C --> C1["ପଦାର୍ଥର ପ୍ରକୃତି ବିଷୟରେ<br/>ଦୁଇଟି ଧାରଣା ଥିଲା।"]
C --> C2["ପରୀକ୍ଷା ଦ୍ୱାରା ସତ୍ୟ<br/>ଜାଣିବା ସମ୍ଭବ ହେଲା।"]
C --> C3["ପଦାର୍ଥ କଣିକାକୁ ନେଇ<br/>ଗଠିତ ବୋଲି ଜଣାପଡ଼ିଲା।"]
end

linkStyle 0 stroke-width:0px;
linkStyle 4 stroke-width:0px;
linkStyle 10 stroke-width:0px;

classDef title fill:#FFE082,stroke:#FF6F00,stroke-width:3px,color:#000,font-weight:bold;
classDef intro fill:#BBDEFB,stroke:#1E88E5,stroke-width:2px,font-weight:bold;
classDef body fill:#C8E6C9,stroke:#2E7D32,stroke-width:2px,font-weight:bold;
classDef conclusion fill:#F8BBD0,stroke:#C2185B,stroke-width:2px,font-weight:bold;

class TITLE title;
class A,I1,I2,I3 intro;
class M,M1,M2,M3,M4,M5 body;
class C,C1,C2,C3 conclusion;`,

    `%%{init: {
'theme': 'base',
'themeVariables': {
  'fontSize': '18px'
}
}}%%
flowchart TD

TITLE["📖 NOTE-4:<br/>ଲୁଣ ଓ ଚିନି ଜଳରେ<br/>କେଉଁଠି ଯାଏ ?"]

TITLE --> INTRO

subgraph INTRO[ ]
direction LR
A["🟡 ଭୂମିକା"]

A --> I1["ଲୁଣ ବା ଚିନି<br/>ଜଳରେ ମିଶିଯାଏ।"]
A --> I2["ମିଶିଗଲେ ସେମାନେ<br/>ଦେଖାଯାଆନ୍ତି ନାହିଁ।"]
A --> I3["ଏହାର କାରଣ<br/>ଜାଣିବା ଦରକାର।"]
end

INTRO --> MAIN

subgraph MAIN[ ]
direction LR
M["🟢 ବ୍ୟାଖ୍ୟା"]

M --> M1["100 ମିଲି ବିକର ନେଇ<br/>ଅଧା ଜଳ ଭରାଯାଏ।"]
M --> M2["ଜଳସ୍ତରକୁ ଚିହ୍ନଟ କରି<br/>ଲୁଣ ବା ଚିନି ପକାଯାଏ।"]
M --> M3["କାଚଦଣ୍ଡ ସାହାଯ୍ୟରେ<br/>ଜଳକୁ ଗୋଳାଯାଏ।"]
M --> M4["ଜଳସ୍ତରର ପରିବର୍ତ୍ତନ ଓ<br/>ଚିନି କେଉଁଠି ଗଲା ଦେଖାଯାଏ।"]
M --> M5["ଲୁଣ ବା ଚିନି ଜଳରେ<br/>ବ୍ୟାପିଯାଏ। ଏହା ପଦାର୍ଥ କଣିକାରୁ ଗଠିତ ବୋଲି ପ୍ରମାଣ କରେ।"]
end

MAIN --> CONCLUSION

subgraph CONCLUSION[ ]
direction LR
C["🔵 ନିଷ୍କର୍ଷ"]

C --> C1["ଚିନି ବା ଲୁଣ<br/>ଜଳରେ ବ୍ୟାପିଯାଏ।"]
C --> C2["ପଦାର୍ଥ କଣିକାକୁ ନେଇ<br/>ଗଠିତ ହୋଇଥାଏ।"]
C --> C3["ସରଳ ପରୀକ୍ଷାରୁ ମଧ୍ୟ<br/>ବୈଜ୍ଞାନିକ ସତ୍ୟ ଜଣାଯାଏ।"]
end

linkStyle 0 stroke-width:0px;
linkStyle 4 stroke-width:0px;
linkStyle 10 stroke-width:0px;

classDef title fill:#FFE082,stroke:#FF6F00,stroke-width:3px,color:#000,font-weight:bold;
classDef intro fill:#BBDEFB,stroke:#1E88E5,stroke-width:2px,font-weight:bold;
classDef body fill:#C8E6C9,stroke:#2E7D32,stroke-width:2px,font-weight:bold;
classDef conclusion fill:#F8BBD0,stroke:#C2185B,stroke-width:2px,font-weight:bold;

class TITLE title;
class A,I1,I2,I3 intro;
class M,M1,M2,M3,M4,M5 body;
class C,C1,C2,C3 conclusion;`,

`%%{init: {
'theme': 'base',
'themeVariables': {
  'fontSize': '18px'
}
}}%%
flowchart TD

TITLE["📖 NOTE-5:<br/>ପଦାର୍ଥର କଣିକାଗୁଡ଼ିକ<br/>କେତେ ଛୋଟ ?"]

TITLE --> INTRO

subgraph INTRO[ ]
direction LR
A["🟡 ଭୂମିକା"]

A --> I1["ପଦାର୍ଥର କଣିକା<br/>ଅତ୍ୟନ୍ତ କ୍ଷୁଦ୍ର ଅଟେ।"]
A --> I2["ରଙ୍ଗ ମିଶାଇଲେ ମଧ୍ୟ<br/>ପାଣି ରଙ୍ଗୀନ ଦେଖାଯାଏ।"]
A --> I3["ଏକ ପରୀକ୍ଷା ଦ୍ୱାରା<br/>ଏହା ଜଣାଯାଏ।"]
end

INTRO --> MAIN

subgraph MAIN[ ]
direction LR
M["🟢 ବ୍ୟାଖ୍ୟା"]

M --> M1["ପୋଟାସିୟମ ପରମାଙ୍ଗାନେଟ୍‌ର<br/>ସ୍ଫଟିକ ଜଳରେ ମିଶାଯାଏ।"]
M --> M2["ଦ୍ରବଣର କିଛି ଅଂଶ ନେଇ<br/>ବିଶୁଦ୍ଧ ଜଳରେ ମିଶାଯାଏ।"]
M --> M3["ଏହି ପ୍ରକ୍ରିୟାରେ ଦ୍ରବଣର<br/>ବାରମ୍ବାର ଲଘୁକରଣ ହୁଏ।"]
M --> M4["ପାଞ୍ଚରୁ ଆଠ ଥର ପରେ ମଧ୍ୟ<br/>ଜଳ ରଙ୍ଗୀନ ରହିଥାଏ।"]
M --> M5["ଅଳ୍ପ ପଦାର୍ଥ ବହୁତ ଜଳକୁ<br/>ରଙ୍ଗୀନ କରିପାରେ।"]
end

MAIN --> CONCLUSION

subgraph CONCLUSION[ ]
direction LR
C["🔵 ନିଷ୍କର୍ଷ"]

C --> C1["ପଦାର୍ଥର କଣିକା<br/>ଅତ୍ୟନ୍ତ କ୍ଷୁଦ୍ର ଅଟେ।"]
C --> C2["ବାରମ୍ବାର ଲଘୁକରଣ ପରେ ମଧ୍ୟ<br/>ତାହାର ପ୍ରଭାବ ରହେ।"]
C --> C3["କ୍ଷୁଦ୍ର କଣିକାର ପ୍ରଭାବ<br/>ସହଜରେ ଦେଖାଯାଏ।"]
end

linkStyle 0 stroke-width:0px;
linkStyle 4 stroke-width:0px;
linkStyle 10 stroke-width:0px;

classDef title fill:#FFE082,stroke:#FF6F00,stroke-width:3px,color:#000,font-weight:bold;
classDef intro fill:#BBDEFB,stroke:#1E88E5,stroke-width:2px,font-weight:bold;
classDef body fill:#C8E6C9,stroke:#2E7D32,stroke-width:2px,font-weight:bold;
classDef conclusion fill:#F8BBD0,stroke:#C2185B,stroke-width:2px,font-weight:bold;

class TITLE title;
class A,I1,I2,I3 intro;
class M,M1,M2,M3,M4,M5 body;
class C,C1,C2,C3 conclusion;`,

`%%{init: {
'theme': 'base',
'themeVariables': {
  'fontSize': '18px'
}
}}%%
flowchart TD

TITLE["📖 NOTE-6:<br/>ପଦାର୍ଥର କଣିକାର<br/>ଅତ୍ୟନ୍ତ କ୍ଷୁଦ୍ର ଆକାର"]

TITLE --> INTRO

subgraph INTRO[ ]
direction LR
A["🟡 ଭୂମିକା"]

A --> I1["ପଦାର୍ଥର କଣିକା<br/>ବହୁତ ଛୋଟ ହୋଇଥାଏ।"]
A --> I2["ସୁଗନ୍ଧିର ଗନ୍ଧ<br/>ସାରା ଘରେ ବ୍ୟାପିଯାଏ।"]
A --> I3["ଏହା କଣିକାର<br/>କ୍ଷୁଦ୍ରତାକୁ ଦେଖାଏ।"]
end

INTRO --> MAIN

subgraph MAIN[ ]
direction LR
M["🟢 ବ୍ୟାଖ୍ୟା"]

M --> M1["ଅଳ୍ପ ପୋଟାସିୟମ ପରମାଙ୍ଗାନେଟ୍<br/>ବହୁତ ଜଳକୁ ରଙ୍ଗୀନ କରେ।"]
M --> M2["ଗୋଟିଏ ସ୍ଫଟିକରେ ଅସଂଖ୍ୟ<br/>କ୍ଷୁଦ୍ର କଣିକା ରହିଥାଏ।"]
M --> M3["କଣିକାଗୁଡ଼ିକ ବିଭାଜିତ ହୋଇ<br/>ଆହୁରି ଛୋଟ ହୋଇଯାନ୍ତି।"]
M --> M4["ଡେଟଲ୍‌କୁ ବାରମ୍ବାର ଲଘୁକରଣ<br/>କଲେ ମଧ୍ୟ ଗନ୍ଧ ରହିଥାଏ।"]
M --> M5["ଗନ୍ଧରୁ ଡେଟଲ୍‌ର ଉପସ୍ଥିତି ଜଣାପଡ଼େ।<br/>କଣିକାର କ୍ଷୁଦ୍ରତା କଳ୍ପନାର ବାହାରେ।"]
end

MAIN --> CONCLUSION

subgraph CONCLUSION[ ]
direction LR
C["🔵 ନିଷ୍କର୍ଷ"]

C --> C1["ପଦାର୍ଥର କଣିକା<br/>ଅତ୍ୟନ୍ତ କ୍ଷୁଦ୍ର ଅଟେ।"]
C --> C2["ଗୋଟିଏ ସ୍ଫଟିକରେ<br/>ଅସଂଖ୍ୟ କଣିକା ଥାଏ।"]
C --> C3["କଣିକାର ଆକାର<br/>କଳ୍ପନା କରିବା କଷ୍ଟକର।"]
end

linkStyle 0 stroke-width:0px;
linkStyle 4 stroke-width:0px;
linkStyle 10 stroke-width:0px;

classDef title fill:#FFE082,stroke:#FF6F00,stroke-width:3px,color:#000,font-weight:bold;
classDef intro fill:#BBDEFB,stroke:#1E88E5,stroke-width:2px,font-weight:bold;
classDef body fill:#C8E6C9,stroke:#2E7D32,stroke-width:2px,font-weight:bold;
classDef conclusion fill:#F8BBD0,stroke:#C2185B,stroke-width:2px,font-weight:bold;

class TITLE title;
class A,I1,I2,I3 intro;
class M,M1,M2,M3,M4,M5 body;
class C,C1,C2,C3 conclusion;`    
];