const mermaidGraphs = [
    `%%{init: {'theme':'base','themeVariables':{'fontSize':'18px'}}}%%
flowchart TD

TITLE["📖 GRAPH-1:<br/>Parts of a Sentence:<br/>Subject and Predicate"]

TITLE --> INTRO

subgraph INTRO[ ]
direction LR
A["🟡 Examples"]
A --> I1["Wind → blows."]
A --> I2["Birds → fly."]
A --> I3["She → smiled."]
end

INTRO --> MAIN

subgraph MAIN[ ]
direction LR
M["🟢 The Two Parts"]
M --> M1["A sentence has two<br/>essential parts."]
M --> M2["Subject is who or what<br/>the sentence is about."]
M --> M3["Predicate tells what<br/>the subject does."]
M --> M4["Single-word subject is<br/>a noun or a pronoun."]
M --> M5["Single-word predicate<br/>must be a Verb."]
end

MAIN --> CONCLUSION

subgraph CONCLUSION[ ]
direction LR
C["🔵 Key Rule"]
C --> C1["Head-word of the subject<br/>is a noun."]
C --> C2["Head-word of the predicate<br/>is a verb."]
C --> C3["Both parts together give<br/>the sentence complete meaning."]
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

    `%%{init: {'theme':'base','themeVariables':{'fontSize':'18px'}}}%%
flowchart TD

TITLE["📖 GRAPH-2:<br/>Splitting Sentences into<br/>Subject, Predicate and Verb"]

TITLE --> INTRO

subgraph INTRO[ ]
direction LR
A["🟡 Sample (Activity-7)"]
A --> I1["Rama plays."]
A --> I2["Subject - Rama."]
A --> I3["Predicate - plays.<br/>Verb - plays."]
end

INTRO --> MAIN

subgraph MAIN[ ]
direction LR
M["🟢 Method"]
M --> M1["First find the subject<br/>of the sentence."]
M --> M2["Then find the predicate<br/>that follows it."]
M --> M3["Pick out the Verb<br/>from the predicate."]
M --> M4["Practice with: She sings,<br/>Time flies, He can write well."]
M --> M5["Practice with: Children laugh,<br/>Rabindra can read, etc."]
end

MAIN --> CONCLUSION

subgraph CONCLUSION[ ]
direction LR
C["🔵 Beyond Single Words"]
C --> C1["Subject may be a phrase:<br/>'Rama chandra, the son of Dasharatha'."]
C --> C2["Predicate may be a phrase:<br/>'ruled over Ayodhya for many years'."]
C --> C3["Verb identification helps<br/>understand sentence structure."]
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

    `%%{init: {'theme':'base','themeVariables':{'fontSize':'18px'}}}%%
flowchart TD

TITLE["📖 GRAPH-3:<br/>Applying Subject-Predicate<br/>in Real Writing (Activities 3-6)"]

TITLE --> INTRO

subgraph INTRO[ ]
direction LR
A["🟡 Activity-3"]
A --> I1["Write 6 sentences using<br/>info about Shrinivas."]
A --> I2["Father, age, sister,<br/>hobby details given."]
A --> I3["Turn short notes into<br/>full sentences."]
end

INTRO --> MAIN

subgraph MAIN[ ]
direction LR
M["🟢 Roadmap Activities"]
M --> M1["Activity-4: Read the police-<br/>rider dialogue and roadmap."]
M --> M2["Identify subjects and<br/>predicates in the dialogue."]
M --> M3["Activity-5: Write 5 sentences<br/>explaining a roadmap to Swati."]
M --> M4["Use direction instructions<br/>(go straight, turn left, etc.)."]
end

MAIN --> CONCLUSION

subgraph CONCLUSION[ ]
direction LR
C["🔵 Activity-6: Daily Routine"]
C --> C1["Write a few sentences<br/>on your daily routine."]
C --> C2["Circle the subjects in<br/>each sentence."]
C --> C3["Underline the predicates<br/>in each sentence."]
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
class M,M1,M2,M3,M4 body;
class C,C1,C2,C3 conclusion;`
];
      


