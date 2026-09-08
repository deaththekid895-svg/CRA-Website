"use strict";

/*
============================================================
CENTRAL RECORDS AUTHORITY
INFERNAL INFORMATION NETWORK
TERMINAL INTERFACE
============================================================
*/
const DB = window.CRA_DB;


const input =
    document.getElementById(
        "command-input"
    );


const form =
    document.getElementById(
        "command-form"
    );

const terminalCursor =
    document.createElement("span");

terminalCursor.id =
    "terminal-cursor";

form.appendChild(
    terminalCursor
);

function updateTerminalCursor() {

    const selectionStart =
        input.selectionStart || 0;

    const textBeforeCursor =
        input.value.substring(0, selectionStart);

    const mirror =
        document.createElement("span");

    const inputStyle =
        window.getComputedStyle(input);

    mirror.style.position = "absolute";
    mirror.style.visibility = "hidden";
    mirror.style.whiteSpace = "pre";

    mirror.style.font =
        inputStyle.font;

    mirror.style.letterSpacing =
        inputStyle.letterSpacing;

    mirror.style.padding =
        inputStyle.padding;

    mirror.style.border =
        inputStyle.border;

    mirror.textContent =
        textBeforeCursor;

    form.appendChild(mirror);

    const textWidth =
        mirror.getBoundingClientRect().width;

    form.removeChild(mirror);

    const inputRect =
        input.getBoundingClientRect();

    const formRect =
        form.getBoundingClientRect();

    terminalCursor.style.left =
        (
            inputRect.left -
            formRect.left +
            textWidth -
            input.scrollLeft
        ) + "px";

    terminalCursor.style.top =
        "50%";

    terminalCursor.style.transform =
        "translateY(-50%)";
}

let terminalActive =
    true;


/* =========================================================
   OUTPUT
========================================================= */

function print(
    text = "",
    className = ""
) {

    const line =
        document.createElement(
            "div"
        );


    if (
        className
    ) {

        line.className =
            className;
    }


    line.textContent =
        text;


    document.getElementById("screen").appendChild(
            line
);


    scrollTerminal();
}


function printBlock(
    text,
    className = ""
) {

    const lines =
        String(text)
            .split("\n");


    for (
        const line
        of lines
    ) {

        print(
            line,
            className
        );
    }
}


function scrollTerminal() {

    const terminal =
        document.getElementById(
            "terminal"
        );


    terminal.scrollTop =
        terminal.scrollHeight;
}


/* =========================================================
   FORMATTING
========================================================= */

function line() {

    print(
        "------------------------------------------------------------",
        "dim"
    );
}


function section(
    title
) {

    print();
    print(
        `[ ${title} ]`,
        "header"
    );
}


function field(
    label,
    value
) {

    print(
        `${label.padEnd(24, " ")} ${value}`
    );
}


/* =========================================================
   BOOT
========================================================= */

function boot() {

    DB.bootDatabase();


    print(
        "CENTRAL RECORDS AUTHORITY",
        "header"
    );

    print(
        "INFERNAL INFORMATION NETWORK",
        "header"
    );

    print();

    print(
        "INITIALIZING NODE CRA-07..."
    );

    print(
        "LOADING ETERNAL RECORD INDEX..."
    );

    print(
        "RESTORING TRANSACTION REGISTER..."
    );

    print(
        "VERIFYING RECORD INTEGRITY..."
    );

    print(
        "CHECKING AUDITOR EXCEPTIONS..."
    );

    print(
        "CHECKING UNRESOLVED CONTRADICTIONS..."
    );

    print();

    print(
        "NODE STATUS: ACTIVE",
        "good"
    );

    print(
        "NETWORK STATUS: ACTIVE",
        "good"
    );

    print(
        "RECORD INTEGRITY: NOMINAL",
        "good"
    );

    print(
        "INDEX STATE: NEW",
        "good"
    );

    print(
        "RECORD SPACE: UNBOUNDED",
        "good"
    );

    print();

    line();

    print(
        "ALL TRANSACTIONS ARE RECORDED.",
        "bright"
    );

    print(
        "UNAUTHORIZED ACCESS CONSTITUTES AN ADMINISTRATIVE OFFENSE.",
        "warn"
    );

    print();

    print(
        "TYPE HELP FOR AVAILABLE COMMANDS.",
        "dim"
    );

    print();

    input.focus();
}


/* =========================================================
   HELP
========================================================= */

function help() {

    print();

    print(
        "CRA/I.I.N. COMMAND REFERENCE",
        "header"
    );

    line();

    print(
        "HELP"
    );

    print(
        "CLEAR / CLS"
    );

    print(
        "STATUS"
    );

    print(
        "RANDOM"
    );

    print(
        "SOUL <NUMBER>"
    );

    print(
        "NAME <FIRST LAST>"
    );

    print(
        "CASE <CASE NUMBER>"
    );

    print(
        "AUD <AUDITOR ID>"
    );

    print(
        "ASR <ASSESSOR ID>"
    );
    
    print(
        "ADJ <ADJUSTER ID>"
    );

    print(
        "TRB <TRIBUNAL ID>"
    );

    print(
        "TRACE <SOUL NUMBER>"
    );

    print(
        "HISTORY <SOUL NUMBER>"
    );

    print(
        "CONTRADICT <SOUL NUMBER>"
    );

        print(
        "DEC <DECREE ID>"
    );

    print(
        "IMP <IMPLEMENTATION ID>"
    );
    
    print(
        "TXN <TRANSACTION ID>"
    );

    print(
        "LOGOFF / EXIT"
    );

    print();

    print(
        "NOTES:",
        "bright"
    );

    print(
        "SOUL NUMBERS ARE NOT REQUIRED TO EXIST IN ADVANCE."
    );

    print(
        "ANY VALID SOUL NUMBER MAY RETURN AN INDEXED RECORD."
    );

    print(
        "NAMES ARE NOT UNIQUE IDENTIFIERS."
    );

    print(
        "MULTIPLE HISTORICAL SUBJECTS MAY SHARE THE SAME NAME."
    );

    print(
        "REFRESHING THIS TERMINAL CREATES A NEW INDEX STATE."
    );

    print();
}


/* =========================================================
   STATUS
========================================================= */

function status() {

    section(
        "NODE STATUS"
    );

    field(
        "NODE",
        "CRA-07"
    );

    field(
        "NETWORK",
        "ACTIVE"
    );

    field(
        "RECORD INTEGRITY",
        "NOMINAL"
    );

    field(
        "INDEX STATE",
        "NEW / PROCEDURAL"
    );

    field(
        "RECORD SPACE",
        "UNBOUNDED"
    );

    field(
        "GENERATED CASES",
        DB.db.cases.size
    );

    field(
        "TRANSACTIONS",
        DB.db.transactions.size
    );

    field(
        "SESSION START",
        DB.db.sessionCreated
            ? DB.db.sessionCreated.toISOString()
            : "UNKNOWN"
    );

    print();

    print(
        "NOTE: GENERATED RECORDS EXIST ONLY WITHIN CURRENT INDEX STATE.",
        "dim"
    );
}


/* =========================================================
   MASTER RECORD
========================================================= */

function showMaster(
    c
) {

    section(
        "MASTER SOUL RECORD"
    );

    field(
        "SOUL NUMBER",
        c.soulNumber
    );

    field(
        "CASE NUMBER",
        c.caseNumber
    );

    field(
        "STATUS",
        c.status
    );

    field(
        "NAME",
        c.name
    );

    field(
        "GENDER",
        c.gender
    );

    field(
        "DATE OF BIRTH",
        c.birthDate
    );

    field(
        "DATE OF DEATH",
        c.deathDate
    );

    field(
        "AGE AT DEATH",
        c.age
    );

    field(
        "ORIGIN",
        c.origin
    );

    field(
        "OCCUPATION",
        c.occupation
    );

    field(
        "PRIMARY OFFENSE",
        c.offense
    );

    field(
        "LOCATION",
        c.location
    );

    field(
        "INTENT",
        c.intent
    );

    field(
        "ARRIVAL DATE",
        c.arrivalDate
    );

    field(
        "AUDITOR",
        c.auditorId
    );

    field(
        "ADJUSTER",
        c.adjusterId
    );

    field(
        "ASSESSOR",
        c.assessorId
    );
    
    field(
        "TRIBUNAL",
        c.tribunalId
    );

    field(
        "DECREE",
        c.decreeId
    );

    field(
        "IMPLEMENTATION",
        c.implementationId
    );

    field(
        "CONTRADICTIONS",
        c.contradictionCount
    );

    print();

    print(
        "RELATED RECORDS:",
        "bright"
    );

    for (
        const related
        of c.relatedSouls || []
    ) {

        print(
            `${related.soulNumber}  ${related.name}  [${related.relation}]`
        );
    }

    print();
}


/* =========================================================
   AUDITOR RECORD
========================================================= */

function showAuditor(
    c
) {

    section(
        "AUDITOR RECORD"
    );

    field(
        "AUDITOR",
        c.auditorId
    );

    field(
        "FORM",
        "AUD-01.0"
    );

    field(
        "SUBJECT",
        c.name
    );

    print();

    print(
        "INITIAL LIFE RECONSTRUCTION:",
        "bright"
    );

    print(
        `SUBJECT LIVED ${c.age} YEARS.`
    );

    print(
        `PRIMARY OCCUPATION: ${c.occupation.toUpperCase()}.`
    );

    print(
        `PRIMARY OFFENSE: ${c.offense.toUpperCase()}.`
    );

    print();

    print(
        "FORM AUD-66.6 — CONFESSION AND SELF-ACCOUNT",
        "bright"
    );

    print(
        c.confession
    );

    print();

    print(
        "SELF-JUSTIFICATION:",
        "bright"
    );

    print(
        c.selfJustification
    );

    print();

    print(
        "REMORSE:",
        "bright"
    );

    print(
        c.remorse
    );

    print();

    print(
        "AUDITOR CLOSING NOTE:",
        "bright"
    );

    print(
        c.auditorConclusion
    );

    if (
        c.contradictionCount > 0
    ) {

        print();

        print(
            "EXCEPTION: CONTRADICTION MATERIAL ATTACHED.",
            "warn"
        );

        print(
            `FORM AUD-13.7 STATUS: ${c.contradictionCount} ENTRY/ENTRIES`
        );
    }
}

/* =========================================================
   ASSESSOR RECORD
========================================================= */

function showAssessor(
    c
) {

    section(
        "ASSESSOR RECORD"
    );

    field(
        "ASSESSOR",
        c.assessorId
    );

    field(
        "FORM",
        "ASR-29.4"
    );

    field(
        "SUBJECT",
        c.name
    );

    print();

    print(
        "REVIEW OF SELF-ACCOUNT:",
        "bright"
    );

    print(
        `SUBJECT'S SELF-JUSTIFICATION ON RECORD: "${c.selfJustification}"`
    );

    print();

    const falsehoods =
        c.contradictions.filter(
            entry =>
                entry.category === "FALSEHOOD"
        );

    const falseMemories =
        c.contradictions.filter(
            entry =>
                entry.category === "FALSE_MEMORY"
        );

    const unclear =
        c.contradictions.filter(
            entry =>
                entry.category === "UNCLEAR"
        );

    const beyond =
        c.contradictions.filter(
            entry =>
                entry.category === "IMPOSSIBLE"
        );

    print(
        "FALSEHOODS IDENTIFIED:",
        "bright"
    );

    if (
        falsehoods.length === 0
    ) {

        print(
            "NONE IDENTIFIED."
        );

    } else {

        for (
            const entry
            of falsehoods
        ) {

            print(
                entry.description
            );
        }
    }

    print();

    print(
        "FALSE MEMORY IDENTIFIED:",
        "bright"
    );

    if (
        falseMemories.length === 0
    ) {

        print(
            "NONE IDENTIFIED."
        );

    } else {

        for (
            const entry
            of falseMemories
        ) {

            print(
                entry.description
            );
        }
    }

    print();

    print(
        "UNCLEAR CIRCUMSTANCES:",
        "bright"
    );

    if (
        unclear.length === 0
    ) {

        print(
            "NONE."
        );

    } else {

        for (
            const entry
            of unclear
        ) {

            print(
                entry.description
            );
        }
    }

    print();

    print(
        "BEYOND ASSESSMENT:",
        "bright"
    );

    if (
        beyond.length === 0
    ) {

        print(
            "NONE."
        );

    } else {

        for (
            const entry
            of beyond
        ) {

            print(
                entry.description
            );
        }
    }

    print();

    print(
        "ASSESSOR NOTE:",
        "bright"
    );

    if (
        falseMemories.length > 0 &&
        falsehoods.length > 0
    ) {

        print(
            "SUBJECT'S ACCOUNT CONTAINS BOTH GENUINE MEMORY DISTORTION AND KNOWING MISSTATEMENT."
        );

    } else if (
        falseMemories.length > 0
    ) {

        print(
            "SUBJECT'S DISCREPANCIES CONSISTENT WITH GENUINE MEMORY DISTORTION, NOT DECEPTION."
        );

    } else if (
        falsehoods.length > 0
    ) {

        print(
            "SUBJECT'S ACCOUNT CONTAINS KNOWING MISSTATEMENT(S)."
        );

    } else {

        print(
            "SUBJECT'S ACCOUNT REVIEWED. NO DISCREPANCY OF EITHER KIND FOUND."
        );
    }

    print();

    print(
        "ASSESSMENT OUTCOME: CLEARED FOR ADJUSTMENT",
        "good"
    );
}

/* =========================================================
   ADJUSTER RECORD
========================================================= */

function showAdjuster(
    c
) {

    section(
        "ADJUSTER RECORD"
    );

    field(
        "ADJUSTER",
        c.adjusterId
    );

    field(
        "CODIFICATION",
        "ADJ-02.3"
    );

    print();

    print(
        "PRIMARY OFFENSE:",
        "bright"
    );

    print(
        c.offense
    );

    print();

    print(
        "INTENT ASSESSMENT:",
        "bright"
    );

    print(
        c.intent
    );

    print();

    print(
        "MITIGATING FACTORS:",
        "bright"
    );

    if (
        c.mitigating.length === 0
    ) {

        print(
            "NONE IDENTIFIED."
        );

    } else {

        for (
            const factor
            of c.mitigating
        ) {

            print(
                `${factor.name}  [${factor.weight}]`
            );
        }
    }

    print();

    print(
        "AGGRAVATING FACTORS:",
        "bright"
    );

    if (
        c.aggravating.length === 0
    ) {

        print(
            "NONE IDENTIFIED."
        );

    } else {

        for (
            const factor
            of c.aggravating
        ) {

            print(
                `${factor.name}  [+${factor.weight}]`
            );
        }
    }

    print();

    print(
        "ADJUSTER RECOMMENDATION:",
        "bright"
    );

    print(
        c.adjusterRecommendation
    );

    print();

    print(
        "ADMINISTRATIVE BURDEN:",
        "bright"
    );

    print(
        `${c.administrativeBurden} REVIEW UNITS`
    );

    print();

    print(
        "ADJUSTER NOTE:",
        "bright"
    );

    print(
        "ADJUSTER DOES NOT DETERMINE GUILT."
    );

    print(
        "ADJUSTER STANDARDIZES THE AUDITOR RECORD FOR SENTENCING."
    );
}


/* =========================================================
   TRIBUNAL RECORD
========================================================= */

function showTribunal(
    c
) {

    section(
        "SENTENCING TRIBUNAL"
    );

    field(
        "TRIBUNAL",
        c.tribunalId
    );

    field(
        "DELIBERATION FORM",
        "TRB-01.1"
    );

    print();

    print(
        "TRIBUNAL FINDING:",
        "bright"
    );

    print(
        c.tribunalFinding
    );

    print();

    print(
        "SENTENCING CLASS:",
        "bright"
    );

    print(
        c.sentencingClass
    );

    print();

    print(
        "SENTENCE TYPE:",
        "bright"
    );

    print(
        c.sentenceType
    );

    print();

    if (
        c.sentenceYears > 0
    ) {

        print(
            "DURATION:",
            "bright"
        );

        print(
            formatDuration(
                c.sentenceYears
            )
        );

    } else {

        print(
            "DURATION:",
            "bright"
        );

        print(
            "NOT REPRESENTABLE AS LINEAR YEARS."
        );
    }

    print();

    print(
        "FINAL DECREE:",
        "bright"
    );

    print(
        c.decreeId
    );

    print();

    print(
        "TRIBUNAL STATEMENT:",
        "bright"
    );

    if (
        c.contradictions.some(
            contradiction =>
                contradiction.impossible
        )
    ) {

        print(
            "UNRESOLVED AUDITOR MATERIAL REVIEWED."
        );

        print(
            "NO DISQUALIFYING ERROR FOUND."
        );

        print(
            "THE TRIBUNAL ACKNOWLEDGES THAT NOT ALL"
        );

        print(
            "RECORDED MATERIAL IS HUMANLY INTERPRETABLE."
        );

        print(
            "THIS DOES NOT PREVENT SENTENCING."
        );

    } else {

        print(
            "RECORD SUFFICIENT FOR SENTENCING."
        );
    }
}

/* =========================================================
   FINAL DECREE
========================================================= */

function showDecree(
    c
) {

    section(
        "FINAL DECREE"
    );

    field(
        "DECREE",
        c.decreeId
    );

    field(
        "FORM",
        "TRB-09.9"
    );

    field(
        "SUBJECT",
        c.name
    );

    field(
        "CASE NUMBER",
        c.caseNumber
    );

    print();

    print(
        `THIS DECREE CONFIRMS THE SENTENCE ISSUED BY TRIBUNAL ${c.tribunalId}.`
    );

    print();

    print(
        "SENTENCING CLASS:",
        "bright"
    );

    print(
        c.sentencingClass
    );

    print();

    print(
        "SENTENCE TYPE:",
        "bright"
    );

    print(
        c.sentenceType
    );

    print();

    print(
        "DURATION:",
        "bright"
    );

    if (
        c.sentenceYears > 0
    ) {

        print(
            formatDuration(
                c.sentenceYears
            )
        );

    } else {

        print(
            "NOT REPRESENTABLE AS LINEAR YEARS."
        );
    }

    print();

    print(
        "TRIBUNAL FINDING ON RECORD:",
        "bright"
    );

    print(
        c.tribunalFinding
    );

    print();

    print(
        "DECREE STATUS: CONFIRMED AND ENTERED INTO RECORD",
        "good"
    );
}


/* =========================================================
   IMPLEMENTATION RECORD
========================================================= */

function showImplementation(
    c
) {

    section(
        "IMPLEMENTATION RECORD"
    );

    field(
        "IMPLEMENTATION",
        c.implementationId
    );

    field(
        "FORM",
        "IMP-04.2"
    );

    field(
        "SUBJECT",
        c.name
    );

    print();

    print(
        `THIS RECORD CONFIRMS EXECUTION OF DECREE ${c.decreeId}.`
    );

    print();

    print(
        "SENTENCE CONFIRMED:",
        "bright"
    );

    print(
        `${c.sentencingClass} / ${c.sentenceType}`
    );

    print();

    print(
        "IMPLEMENTATION FINDING:",
        "bright"
    );

    print(
        c.implementationFinding
    );
}

/* =========================================================
   CONTRADICTIONS
========================================================= */

function showContradictions(
    c
) {

    section(
        "CONTRADICTION REGISTER"
    );

    field(
        "SUBJECT",
        c.name
    );

    field(
        "SOUL NUMBER",
        c.soulNumber
    );

    field(
        "TOTAL ENTRIES",
        c.contradictionCount
    );

    print();

    if (
        c.contradictions.length === 0
    ) {

        print(
            "NO CONTRADICTIONS REGISTERED.",
            "good"
        );

        return;
    }


    for (
        const contradiction
        of c.contradictions
    ) {

        line();

        print(
            `${contradiction.id} — ${contradiction.type}`,
            contradiction.impossible
                ? "warn"
                : "bright"
        );

        print();

        print(
            contradiction.description
        );

        print();

        field(
            "CLASSIFICATION",
            contradiction.impossible
                ? "IMPOSSIBLE / UNRESOLVED"
                : "ORDINARY"
        );

        field(
            "RESOLUTION",
            contradiction.resolution
        );
    }

    print();

    line();

    print(
        "AUDITOR NOTE:",
        "bright"
    );

    if (
        c.contradictions.some(
            c => c.impossible
        )
    ) {

        print(
            "NO HUMAN-INTELLIGIBLE RESOLUTION AVAILABLE."
        );

    } else {

        print(
            "CONTRADICTIONS REVIEWED FOR SENTENCING RELEVANCE."
        );
    }
}


/* =========================================================
   TRACE
========================================================= */

function showTrace(
    c
) {

    section(
        "CASE TRACE"
    );

    print(
        `SOUL ${c.soulNumber}`,
        "bright"
    );

    print();

    print(
        "01  INTAKE"
    );

    print(
        "    ↓"
    );

    print(
        `02  AUDITOR ${c.auditorId}`
    );

    print(
        "    ↓"
    );

    print(
        "03  LIFE RECORD RECONSTRUCTION"
    );

    print(
        "    ↓"
    );

    print(
        "04  CONTRADICTION REVIEW"
    );

    print(
        "    ↓"
    );

    print(
        `05  ADJUSTER ${c.adjusterId}`
    );

    print(
        "    ↓"
    );

    print(
        "06  SENTENCING CODIFICATION"
    );

    print(
        "    ↓"
    );

    print(
        `07  TRIBUNAL ${c.tribunalId}`
    );

    print(
        "    ↓"
    );

    print(
        `08  DECREE ${c.decreeId}`
    );

    print(
        "    ↓"
    );

    print(
        `09  IMPLEMENTATION ${c.implementationId}`
    );

    print();

    print(
        "TRACE COMPLETE.",
        "good"
    );
}


/* =========================================================
   HISTORY
========================================================= */

function showHistory(
    c
) {

    section(
        "TRANSACTION HISTORY"
    );

    field(
        "SOUL",
        c.soulNumber
    );

    print();

    for (
        const transaction
        of c.transactions
    ) {

        print(
            `${transaction.id}  ${transaction.type}`
        );

        print(
            `    ACTOR: ${transaction.actor}`
        );

        print(
            `    DATE:  ${transaction.timestamp}`
        );

        print(
            `    ${transaction.description}`
        );

        print();
    }
}


/* =========================================================
   TRANSACTION
========================================================= */

function showTransaction(
    transactionId
) {

    const transaction =
        DB.getTransaction(
            transactionId
        );


    if (
        !transaction
    ) {

        print(
            "TRANSACTION NOT FOUND IN CURRENT INDEX STATE.",
            "warn"
        );

        return;
    }


    section(
        "TRANSACTION RECORD"
    );

    field(
        "TRANSACTION",
        transaction.id
    );

    field(
        "TYPE",
        transaction.type
    );

    field(
        "ACTOR",
        transaction.actor
    );

    field(
        "SOUL",
        transaction.soulNumber
    );

    field(
        "TIMESTAMP",
        transaction.timestamp
    );

    print();

    print(
        transaction.description
    );
}


/* =========================================================
   RECORD DISPLAY
========================================================= */

function showRecord(
    c
) {

    if (
        !c
    ) {

        print(
            "NO RECORD AVAILABLE.",
            "warn"
        );

        return;
    }


    if (
        c.generatedRelationOnly
    ) {

        section(
            "RELATED SOUL RECORD"
        );

        field(
            "SOUL NUMBER",
            c.soulNumber
        );

        field(
            "NAME",
            c.name
        );

        field(
            "RELATION",
            c.relation
        );

        field(
            "PARENT SOUL",
            c.parentSoul
        );

        print();

        print(
            "THIS RECORD IS PRESENTLY INDEXED AS A RELATED RECORD ONLY.",
            "dim"
        );

        return;
    }


    showMaster(
        c
    );
}


/* =========================================================
   NAME SEARCH
========================================================= */

function commandName(
    argument
) {

    if (
        !argument
    ) {

        print(
            "SYNTAX: NAME <FIRST LAST>",
            "warn"
        );

        return;
    }


    const parts =
        argument
            .trim()
            .split(
                /\s+/
            );


    if (
        parts.length < 2
    ) {

        print(
            "NAME QUERY REQUIRES AT LEAST FIRST AND LAST NAME.",
            "warn"
        );

        return;
    }


    const normalized =
        parts
            .join(" ");


    print();

    print(
        "SEARCHING ETERNAL RECORD INDEX..."
    );

    print(
        "INDEX QUERY ACCEPTED."
    );

    print(
        "NAME COLLISION: EXTENSIVE"
    );

    print(
        "RECORD INSTANCE REQUESTED."
    );

    print();


    const c =
        DB.ensureName(
            normalized
        );


    if (
        !c
    ) {

        print(
            "NAME QUERY REJECTED.",
            "warn"
        );

        return;
    }


    print(
        `RECORD INSTANCE LOCATED: ${c.soulNumber}`,
        "good"
    );

    print();


    showMaster(
        c
    );
}


/* =========================================================
   SOUL SEARCH
========================================================= */

function commandSoul(
    argument
) {

    if (
        !argument
    ) {

        print(
            "SYNTAX: SOUL <NUMBER>",
            "warn"
        );

        return;
    }


    if (
        !/^\d+$/.test(
            argument
                .trim()
        )
    ) {

        print(
            "SOUL IDENTIFIER MUST BE NUMERIC.",
            "warn"
        );

        return;
    }


    print();

    print(
        "SEARCHING ETERNAL RECORD INDEX..."
    );

    print(
        "INDEX QUERY ACCEPTED."
    );

    print(
        "RECORD INSTANCE REQUESTED."
    );

    print();


    const c =
        DB.ensureSoul(
            argument
        );


    if (
        !c
    ) {

        print(
            "SOUL RECORD NOT FOUND.",
            "warn"
        );

        return;
    }


    print(
        "RECORD LOCATED.",
        "good"
    );

    print();

    showRecord(
        c
    );
}


/* =========================================================
   CASE SEARCH
========================================================= */

function commandCase(
    argument
) {

    if (
        !argument
    ) {

        print(
            "SYNTAX: CASE <CASE NUMBER>",
            "warn"
        );

        return;
    }


    const c =
        DB.ensureCase(
            argument
        );


    if (
        !c
    ) {

        print(
            "CASE RECORD NOT FOUND.",
            "warn"
        );

        return;
    }


    showMaster(
        c
    );
}


/* =========================================================
   AUDITOR SEARCH
========================================================= */

function commandAuditor(
    argument
) {

    if (
        !argument
    ) {

        print(
            "SYNTAX: AUD <AUDITOR ID>",
            "warn"
        );

        return;
    }


    const c =
        DB.findByPersonnel(
            argument,
            "auditorId"
        );


    if (
        !c
    ) {

        print(
            "AUDITOR RECORD NOT FOUND IN CURRENT INDEX STATE.",
            "warn"
        );

        return;
    }


    showAuditor(
        c
    );
}

/* =========================================================
   ASSESSOR SEARCH
========================================================= */

function commandAssessor(
    argument
) {

    if (
        !argument
    ) {

        print(
            "SYNTAX: ASR <ASSESSOR ID>",
            "warn"
        );

        return;
    }


    const c =
        DB.findByPersonnel(
            argument,
            "assessorId"
        );


    if (
        !c
    ) {

        print(
            "ASSESSOR RECORD NOT FOUND IN CURRENT INDEX STATE.",
            "warn"
        );

        return;
    }


    showAssessor(
        c
    );
}

/* =========================================================
   ADJUSTER SEARCH
========================================================= */

function commandAdjuster(
    argument
) {

    if (
        !argument
    ) {

        print(
            "SYNTAX: ADJ <ADJUSTER ID>",
            "warn"
        );

        return;
    }


    const c =
        DB.findByPersonnel(
            argument,
            "adjusterId"
        );


    if (
        !c
    ) {

        print(
            "ADJUSTER RECORD NOT FOUND IN CURRENT INDEX STATE.",
            "warn"
        );

        return;
    }


    showAdjuster(
        c
    );
}


/* =========================================================
   TRIBUNAL SEARCH
========================================================= */

function commandTribunal(
    argument
) {

    if (
        !argument
    ) {

        print(
            "SYNTAX: TRB <TRIBUNAL ID>",
            "warn"
        );

        return;
    }


    const c =
        DB.findByPersonnel(
            argument,
            "tribunalId"
        );


    if (
        !c
    ) {

        print(
            "TRIBUNAL RECORD NOT FOUND IN CURRENT INDEX STATE.",
            "warn"
        );

        return;
    }


    showTribunal(
        c
    );
}


/* =========================================================
   TRACE COMMAND
========================================================= */

function commandTrace(
    argument
) {

    if (
        !argument
    ) {

        print(
            "SYNTAX: TRACE <SOUL NUMBER>",
            "warn"
        );

        return;
    }


    const c =
        DB.ensureSoul(
            argument
        );


    if (
        !c
    ) {

        print(
            "SOUL RECORD NOT FOUND.",
            "warn"
        );

        return;
    }


    showTrace(
        c
    );
}


/* =========================================================
   HISTORY COMMAND
========================================================= */

function commandHistoryCommand(
    argument
) {

    if (
        !argument
    ) {

        print(
            "SYNTAX: HISTORY <SOUL NUMBER>",
            "warn"
        );

        return;
    }


    const c =
        DB.ensureSoul(
            argument
        );


    if (
        !c
    ) {

        print(
            "SOUL RECORD NOT FOUND.",
            "warn"
        );

        return;
    }


    showHistory(
        c
    );
}

/* =========================================================
   DECREE COMMAND
========================================================= */

function commandDecree(
    argument
) {

    if (
        !argument
    ) {

        print(
            "SYNTAX: DEC <DECREE ID>",
            "warn"
        );

        return;
    }


    const c =
        DB.findByPersonnel(
            argument,
            "decreeId"
        );


    if (
        !c
    ) {

        print(
            "DECREE RECORD NOT FOUND IN CURRENT INDEX STATE.",
            "warn"
        );

        return;
    }


    showDecree(
        c
    );
}


/* =========================================================
   IMPLEMENTATION COMMAND
========================================================= */

function commandImplementation(
    argument
) {

    if (
        !argument
    ) {

        print(
            "SYNTAX: IMP <IMPLEMENTATION ID>",
            "warn"
        );

        return;
    }


    const c =
        DB.findByPersonnel(
            argument,
            "implementationId"
        );


    if (
        !c
    ) {

        print(
            "IMPLEMENTATION RECORD NOT FOUND IN CURRENT INDEX STATE.",
            "warn"
        );

        return;
    }


    showImplementation(
        c
    );
}

/* =========================================================
   CONTRADICTION COMMAND
========================================================= */

function commandContradict(
    argument
) {

    if (
        !argument
    ) {

        print(
            "SYNTAX: CONTRADICT <SOUL NUMBER>",
            "warn"
        );

        return;
    }


    const c =
        DB.ensureSoul(
            argument
        );


    if (
        !c
    ) {

        print(
            "SOUL RECORD NOT FOUND.",
            "warn"
        );

        return;
    }


    showContradictions(
        c
    );
}


/* =========================================================
   RANDOM COMMAND
========================================================= */

function commandRandom() {

    print();

    print(
        "GENERATING INDEX QUERY..."
    );

    const c =
        DB.randomCase();


    print(
        "RANDOM INDEX QUERY ACCEPTED.",
        "good"
    );

    print(
        `SOUL NUMBER: ${c.soulNumber}`,
        "bright"
    );

    print();

    showMaster(
        c
    );
}


/* =========================================================
   COMMAND PROCESSOR
========================================================= */

function executeCommand(
    rawCommand
) {

    const raw =
        String(rawCommand)
            .trim();


    if (
        !raw
    ) {

        return;
    }


    print(
        `> ${raw}`,
        "dim"
    );


    const firstSpace =
        raw.indexOf(" ");


    let command;
    let argument;


    if (
        firstSpace === -1
    ) {

        command =
            raw.toUpperCase();

        argument =
            "";

    } else {

        command =
            raw
                .slice(
                    0,
                    firstSpace
                )
                .toUpperCase();

        argument =
            raw
                .slice(
                    firstSpace + 1
                )
                .trim();
    }


    switch (
        command
    ) {

        case "HELP":

            help();

            break;


        case "CLEAR":

        case "CLS":

            screen.innerHTML =
                "";

            break;


        case "STATUS":

            status();

            break;


        case "RANDOM":

            commandRandom();

            break;


        case "SOUL":

            commandSoul(
                argument
            );

            break;


        case "NAME":

            commandName(
                argument
            );

            break;


        case "CASE":

            commandCase(
                argument
            );

            break;


        case "AUD":

            commandAuditor(
                argument
            );

            break;

        case "ASR":

            commandAssessor(
                argument
            );

            break;

        case "ADJ":

            commandAdjuster(
                argument
            );

            break;


        case "TRB":

            commandTribunal(
                argument
            );

            break;


        case "TRACE":

            commandTrace(
                argument
            );

            break;


        case "HISTORY":

            commandHistoryCommand(
                argument
            );

            break;


        case "CONTRADICT":

            commandContradict(
                argument
            );

            break;

                    case "DEC":

            commandDecree(
                argument
            );

            break;


        case "IMP":

            commandImplementation(
                argument
            );

            break;

        case "TXN":

            showTransaction(
                argument
            );

            break;


        case "LOGOFF":

        case "EXIT":

            logoff();

            break;


        default:

            print(
                `COMMAND NOT RECOGNIZED: ${command}`,
                "warn"
            );

            print(
                "TYPE HELP FOR AVAILABLE COMMANDS.",
                "dim"
            );

            break;
    }


    scrollTerminal();
}


/* =========================================================
   LOGOFF
========================================================= */

function logoff() {

    print();

    line();

    print(
        "TERMINAL SESSION CLOSING..."
    );

    print(
        "COMMITTING TRANSACTION REGISTER..."
    );

    print(
        "VERIFYING AUDIT TRAIL..."
    );

    print(
        "SESSION CLOSED.",
        "good"
    );

    print();

    print(
        "THANK YOU FOR USING THE CENTRAL RECORDS AUTHORITY."
    );

    print();

    terminalActive =
        false;

    input.disabled =
        true;
}


/* =========================================================
   INPUT HANDLING
========================================================= */

var commandHistory = [];
let historyIndex = -1;


/*
    Submit command.
*/

form.addEventListener(
    "submit",
    function(event) {

        event.preventDefault();


        if (
            !terminalActive
        ) {

            return;
        }


        const command =
            input.value.trim();


        if (
            command.length === 0
        ) {

            return;
        }


        /*
            Store command in history.

            Do not store duplicate consecutive commands.
        */

        if (
            commandHistory.length === 0 ||
            commandHistory[
                commandHistory.length - 1
            ] !== command
        ) {

            commandHistory.push(
                command
            );
        }


        historyIndex =
            commandHistory.length;


        input.value =
            "";


        executeCommand(
            command
        );
    }
);

input.addEventListener(
    "input",
    updateTerminalCursor
);

input.addEventListener(
    "keyup",
    updateTerminalCursor
);

input.addEventListener(
    "click",
    updateTerminalCursor
);

input.addEventListener(
    "focus",
    updateTerminalCursor
);

window.addEventListener(
    "resize",
    updateTerminalCursor
);

setTimeout(
    updateTerminalCursor,
    0
);

/*
    UP / DOWN ARROW COMMAND HISTORY
*/

input.addEventListener(
    "keydown",
    function(event) {

        if (
            event.key === "ArrowUp"
        ) {

            event.preventDefault();


            if (
                commandHistory.length === 0
            ) {

                return;
            }


            if (
                historyIndex > 0
            ) {

                historyIndex--;
            }


            input.value =
                commandHistory[
                    historyIndex
                ];


            /*
                Put cursor at the end of the command.
            */

            input.setSelectionRange(
                input.value.length,
                input.value.length
            );

            return;
        }


        if (
            event.key === "ArrowDown"
        ) {

            event.preventDefault();


            if (
                commandHistory.length === 0
            ) {

                return;
            }


            if (
                historyIndex <
                commandHistory.length - 1
            ) {

                historyIndex++;


                input.value =
                    commandHistory[
                        historyIndex
                    ];

            } else {

                historyIndex =
                    commandHistory.length;

                input.value =
                    "";
            }


            input.setSelectionRange(
                input.value.length,
                input.value.length
            );
        }
    }
);


/*
    Keep terminal focused when clicking anywhere on screen.
*/

document.addEventListener(
    "click",
    function(event) {

        if (
            terminalActive &&
            !event.target.closest(
                "input"
            )
        ) {

            input.focus();
        }
    }
);


/* =========================================================
   START
========================================================= */

boot();
