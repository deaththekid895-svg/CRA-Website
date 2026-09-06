"use strict";

/*
============================================================
CENTRAL RECORDS AUTHORITY
INFERNAL INFORMATION NETWORK
PROCEDURAL RECORD ENGINE
============================================================

Every page load creates a new universe seed.

A soul number is NOT a database row.

Instead:

    UNIVERSE SEED
          +
    QUERY IDENTIFIER
          +
    PROCEDURAL RULES
          =
    CASE

This allows the archive to behave as though it is effectively
unbounded.

The same query during the same session is stable.

Refreshing the page creates an entirely different universe.
============================================================
*/


/* =========================================================
   DATA
========================================================= */

const FIRST_NAMES = [

    "Aaron",
    "Abigail",
    "Adam",
    "Adrian",
    "Aileen",
    "Alan",
    "Albert",
    "Alex",
    "Alexander",
    "Alice",
    "Amanda",
    "Amelia",
    "Andrew",
    "Angela",
    "Anna",
    "Anthony",
    "Arthur",
    "Ashley",
    "Audrey",
    "Benjamin",
    "Bernard",
    "Beth",
    "Blake",
    "Brandon",
    "Brian",
    "Brianna",
    "Caleb",
    "Calvin",
    "Cameron",
    "Carl",
    "Caroline",
    "Catherine",
    "Charles",
    "Charlotte",
    "Chester",
    "Christopher",
    "Claire",
    "Clara",
    "Connor",
    "Daniel",
    "David",
    "Diana",
    "Dominic",
    "Dorothy",
    "Edward",
    "Eleanor",
    "Elena",
    "Elias",
    "Elizabeth",
    "Elliot",
    "Emily",
    "Emma",
    "Eric",
    "Erin",
    "Ethan",
    "Evelyn",
    "Felix",
    "Florence",
    "Francis",
    "Frank",
    "Gabriel",
    "George",
    "Grace",
    "Gregory",
    "Hannah",
    "Harold",
    "Hazel",
    "Helen",
    "Henry",
    "Ian",
    "Isaac",
    "Isabel",
    "Jack",
    "Jacob",
    "James",
    "Jane",
    "Jason",
    "Jean",
    "Jennifer",
    "Jeremy",
    "Jessica",
    "John",
    "Jonathan",
    "Joseph",
    "Joshua",
    "Julia",
    "Julian",
    "Karen",
    "Karl",
    "Katherine",
    "Kenneth",
    "Kevin",
    "Laura",
    "Lauren",
    "Leo",
    "Leonard",
    "Liam",
    "Lillian",
    "Linda",
    "Logan",
    "Louis",
    "Lucas",
    "Lucy",
    "Luke",
    "Margaret",
    "Maria",
    "Marie",
    "Mark",
    "Martin",
    "Mary",
    "Matthew",
    "Max",
    "Michael",
    "Michelle",
    "Nathan",
    "Nicholas",
    "Nicole",
    "Noah",
    "Nora",
    "Oliver",
    "Olivia",
    "Oscar",
    "Owen",
    "Patrick",
    "Paul",
    "Peter",
    "Philip",
    "Rachel",
    "Rebecca",
    "Richard",
    "Robert",
    "Rose",
    "Ryan",
    "Samuel",
    "Sarah",
    "Scott",
    "Sean",
    "Sebastian",
    "Sharon",
    "Simon",
    "Sophia",
    "Stephen",
    "Steven",
    "Susan",
    "Taylor",
    "Thomas",
    "Timothy",
    "Trevor",
    "Victor",
    "Victoria",
    "Vincent",
    "Walter",
    "Warren",
    "William",
    "Zachary"
];


const LAST_NAMES = [

    "Adams",
    "Anderson",
    "Armstrong",
    "Baker",
    "Barnes",
    "Bennett",
    "Bishop",
    "Black",
    "Bradley",
    "Brooks",
    "Brown",
    "Bryant",
    "Burke",
    "Butler",
    "Campbell",
    "Carpenter",
    "Carroll",
    "Carter",
    "Chambers",
    "Chapman",
    "Clark",
    "Clarke",
    "Cole",
    "Collins",
    "Cook",
    "Cooper",
    "Cox",
    "Crawford",
    "Cruz",
    "Cunningham",
    "Daniels",
    "Davidson",
    "Davis",
    "Dawson",
    "Dean",
    "Diaz",
    "Dixon",
    "Douglas",
    "Duncan",
    "Dunn",
    "Edwards",
    "Ellis",
    "Evans",
    "Ferguson",
    "Fisher",
    "Fleming",
    "Ford",
    "Foster",
    "Fox",
    "Franklin",
    "Freeman",
    "Garcia",
    "Gardner",
    "Gibson",
    "Gilbert",
    "Gill",
    "Glover",
    "Gomez",
    "Gonzalez",
    "Gordon",
    "Graham",
    "Grant",
    "Gray",
    "Green",
    "Griffin",
    "Hall",
    "Hamilton",
    "Harris",
    "Harrison",
    "Hart",
    "Harvey",
    "Hawkins",
    "Hayes",
    "Henderson",
    "Henry",
    "Hernandez",
    "Hill",
    "Hoffman",
    "Holland",
    "Holmes",
    "Howard",
    "Hudson",
    "Hughes",
    "Hunt",
    "Hunter",
    "Jackson",
    "Jacobs",
    "James",
    "Jenkins",
    "Jennings",
    "Johnson",
    "Johnston",
    "Jones",
    "Jordan",
    "Keller",
    "Kelly",
    "Kennedy",
    "King",
    "Knight",
    "Lane",
    "Larson",
    "Lawrence",
    "Lee",
    "Lewis",
    "Little",
    "Long",
    "Lopez",
    "Marshall",
    "Martin",
    "Martinez",
    "Mason",
    "Matthews",
    "Maxwell",
    "May",
    "McCarthy",
    "McDonald",
    "Miller",
    "Mills",
    "Mitchell",
    "Moore",
    "Morgan",
    "Morris",
    "Morrison",
    "Murphy",
    "Murray",
    "Myers",
    "Nelson",
    "Newman",
    "Nichols",
    "Nicholson",
    "Norris",
    "North",
    "Oliver",
    "Olsen",
    "Ortiz",
    "Owen",
    "Palmer",
    "Parker",
    "Patterson",
    "Payne",
    "Pearson",
    "Perry",
    "Peterson",
    "Phillips",
    "Pierce",
    "Porter",
    "Powell",
    "Price",
    "Quinn",
    "Reed",
    "Reeves",
    "Reid",
    "Reynolds",
    "Rhodes",
    "Rice",
    "Richards",
    "Richardson",
    "Riley",
    "Rivera",
    "Roberts",
    "Robertson",
    "Robinson",
    "Rodriguez",
    "Rogers",
    "Rose",
    "Ross",
    "Rowe",
    "Russell",
    "Ryan",
    "Sanders",
    "Sanchez",
    "Schmidt",
    "Schneider",
    "Scott",
    "Shaw",
    "Shelton",
    "Sherman",
    "Simmons",
    "Simpson",
    "Smith",
    "Snyder",
    "Spencer",
    "Stanley",
    "Steele",
    "Stephens",
    "Stevens",
    "Stewart",
    "Stone",
    "Sullivan",
    "Taylor",
    "Thomas",
    "Thompson",
    "Torres",
    "Townsend",
    "Turner",
    "Underwood",
    "Vance",
    "Vaughn",
    "Wagner",
    "Walker",
    "Wallace",
    "Walsh",
    "Walters",
    "Ward",
    "Warner",
    "Warren",
    "Washington",
    "Watson",
    "Weaver",
    "Webb",
    "Wells",
    "West",
    "Wheeler",
    "White",
    "Wilkins",
    "Williams",
    "Williamson",
    "Wilson",
    "Winters",
    "Wolfe",
    "Wood",
    "Woods",
    "Wright",
    "Young"
];


const ORIGINS = [

    "North American Federation",
    "Atlantic Commonwealth",
    "Northern Continental Union",
    "Pacific Republic",
    "Central European Directorate",
    "Western European Commonwealth",
    "Eastern European Union",
    "Mediterranean Republic",
    "Northern Kingdoms",
    "Southern Continental Federation",
    "Eastern Commonwealth",
    "Central Asian Federation",
    "Northern Asian Union",
    "Pacific Coalition",
    "Southern Asian Federation",
    "African Continental Union",
    "Northern African Republic",
    "Western African Federation",
    "Eastern African Commonwealth",
    "Southern African Union",
    "South American Federation",
    "Andean Republic",
    "Southern Cone Federation",
    "Caribbean Commonwealth",
    "Arctic Settlement Authority",
    "Unregistered Territory",
    "Former State — dissolved",
    "Origin indeterminate"
];


const OCCUPATIONS = [

    "Accountant",
    "Agricultural worker",
    "Architect",
    "Artist",
    "Automotive mechanic",
    "Bank clerk",
    "Barber",
    "Bookkeeper",
    "Builder",
    "Bus driver",
    "Carpenter",
    "Cashier",
    "Chef",
    "Clerk",
    "Construction worker",
    "Courier",
    "Dock worker",
    "Doctor",
    "Electrician",
    "Engineer",
    "Factory worker",
    "Farmer",
    "Firefighter",
    "Fisher",
    "Foreman",
    "Journalist",
    "Laborer",
    "Lawyer",
    "Machinist",
    "Manager",
    "Mechanic",
    "Merchant",
    "Military officer",
    "Nurse",
    "Painter",
    "Pharmacist",
    "Pilot",
    "Police officer",
    "Postal worker",
    "Professor",
    "Programmer",
    "Railway worker",
    "Receptionist",
    "Researcher",
    "Restaurant worker",
    "Salesperson",
    "Scientist",
    "Secretary",
    "Security guard",
    "Shipwright",
    "Soldier",
    "Teacher",
    "Technician",
    "Truck driver",
    "Warehouse worker",
    "Writer",
    "Unemployed",
    "Student"
];


const LOCATIONS = [

    "residence",
    "workplace",
    "public street",
    "commercial district",
    "industrial district",
    "rural property",
    "transport station",
    "private residence",
    "government facility",
    "educational institution",
    "medical facility",
    "religious facility",
    "financial institution",
    "hospitality establishment",
    "agricultural property",
    "unknown location"
];


/*
    Each offense contains:

    title
    severity
    base sentence
    available intent categories
*/

const OFFENSES = [

    {
        title: "Fraud",
        severity: 2,
        base: 8,
        intents: [
            "personal gain",
            "financial desperation",
            "retaliation",
            "habitual deception"
        ]
    },

    {
        title: "Theft",
        severity: 1,
        base: 4,
        intents: [
            "personal gain",
            "necessity",
            "opportunism",
            "retaliation"
        ]
    },

    {
        title: "Embezzlement",
        severity: 2,
        base: 10,
        intents: [
            "personal gain",
            "financial desperation",
            "status maintenance"
        ]
    },

    {
        title: "Assault",
        severity: 3,
        base: 15,
        intents: [
            "anger",
            "fear",
            "retaliation",
            "intimidation",
            "pleasure in domination"
        ]
    },

    {
        title: "Reckless endangerment",
        severity: 2,
        base: 9,
        intents: [
            "negligence",
            "indifference",
            "recklessness",
            "panic"
        ]
    },

    {
        title: "Kidnapping",
        severity: 5,
        base: 35,
        intents: [
            "financial gain",
            "control",
            "retaliation",
            "coercion",
            "ideological justification"
        ]
    },

    {
        title: "Manslaughter",
        severity: 5,
        base: 40,
        intents: [
            "negligence",
            "recklessness",
            "panic",
            "self-preservation"
        ]
    },

    {
        title: "Murder",
        severity: 7,
        base: 65,
        intents: [
            "anger",
            "financial gain",
            "retaliation",
            "self-preservation",
            "ideological justification",
            "pleasure in harm",
            "control"
        ]
    },

    {
        title: "Serial murder",
        severity: 10,
        base: 100,
        intents: [
            "pleasure in harm",
            "control",
            "ideological justification",
            "compulsion",
            "hatred"
        ]
    },

    {
        title: "Conspiracy",
        severity: 4,
        base: 22,
        intents: [
            "financial gain",
            "ideological justification",
            "retaliation",
            "status",
            "coercion"
        ]
    },

    {
        title: "Sabotage",
        severity: 5,
        base: 30,
        intents: [
            "ideological justification",
            "retaliation",
            "financial gain",
            "political loyalty"
        ]
    },

    {
        title: "Abuse of authority",
        severity: 4,
        base: 24,
        intents: [
            "control",
            "personal gain",
            "ideological justification",
            "pleasure in domination"
        ]
    },

    {
        title: "Negligent homicide",
        severity: 4,
        base: 28,
        intents: [
            "negligence",
            "recklessness",
            "indifference"
        ]
    },

    {
        title: "Perjury",
        severity: 2,
        base: 7,
        intents: [
            "self-preservation",
            "financial gain",
            "loyalty",
            "fear"
        ]
    },

    {
        title: "Obstruction",
        severity: 2,
        base: 8,
        intents: [
            "self-preservation",
            "loyalty",
            "financial gain",
            "fear"
        ]
    },

    {
        title: "Extortion",
        severity: 4,
        base: 25,
        intents: [
            "financial gain",
            "control",
            "retaliation"
        ]
    },

    {
        title: "Arson",
        severity: 4,
        base: 27,
        intents: [
            "retaliation",
            "financial gain",
            "ideological justification",
            "anger",
            "pleasure in destruction"
        ]
    },

    {
        title: "Mass casualty event",
        severity: 9,
        base: 90,
        intents: [
            "ideological justification",
            "retaliation",
            "pleasure in harm",
            "political loyalty",
            "hatred"
        ]
    }
];


const MITIGATING_FACTORS = [

    {
        name: "Coercion",
        weight: -18
    },

    {
        name: "Immediate threat to life",
        weight: -14
    },

    {
        name: "Severe fear response",
        weight: -10
    },

    {
        name: "Limited understanding of consequences",
        weight: -7
    },

    {
        name: "Genuine remorse",
        weight: -12
    },

    {
        name: "Voluntary confession",
        weight: -8
    },

    {
        name: "Attempted restitution",
        weight: -7
    },

    {
        name: "Protection of another person",
        weight: -9
    },

    {
        name: "Manipulation by another actor",
        weight: -11
    },

    {
        name: "Documented psychological distress",
        weight: -6
    }
];


const AGGRAVATING_FACTORS = [

    {
        name: "Premeditation",
        weight: 16
    },

    {
        name: "Repeated conduct",
        weight: 18
    },

    {
        name: "Abuse of trust",
        weight: 14
    },

    {
        name: "Targeting of vulnerable persons",
        weight: 17
    },

    {
        name: "Pleasure in harm",
        weight: 25
    },

    {
        name: "Ideological justification",
        weight: 12
    },

    {
        name: "Deliberate concealment",
        weight: 9
    },

    {
        name: "Mockery of victim suffering",
        weight: 20
    },

    {
        name: "Refusal of responsibility",
        weight: 11
    },

    {
        name: "Post-event manipulation",
        weight: 10
    }
];


const CONTRADICTION_TYPES = [

    "MEMORY CONFLICT",
    "INTENT CONFLICT",
    "TEMPORAL DISCONTINUITY",
    "SELF-IDENTIFICATION CONFLICT",
    "MOTIVE CONFLICT",
    "WITNESS MEMORY CONFLICT",
    "CAUSALITY CONFLICT",
    "EMOTIONAL RESPONSE CONFLICT",
    "CONFESSION CONFLICT",
    "UNRESOLVED RECOLLECTION"
];


const IMPOSSIBLE_CONTRADICTIONS = [

    "SIMULTANEOUS MEMORY STATES",
    "UNRECORDED KNOWLEDGE",
    "NON-SEQUENTIAL RECOLLECTION",
    "IDENTITY DISPLACEMENT",
    "UNWITNESSED MEMORY",
    "CAUSALITY CONFLICT",
    "DUPLICATE EVENT STATE",
    "OBSERVATION WITHOUT OBSERVER",
    "MEMORY OF AN EVENT BEFORE OCCURRENCE",
    "MEMORY PERSISTING AFTER SUBJECT DEATH"
];


const RELATION_TYPES = [

    "VICTIM",
    "ACCOMPLICE",
    "WITNESS",
    "FAMILY MEMBER",
    "EMPLOYER",
    "EMPLOYEE",
    "ASSOCIATE",
    "CONFESSOR",
    "INVESTIGATIVE SUBJECT",
    "CO-CONSPIRATOR",
    "UNKNOWN RELATION"
];


const REMORSE_LEVELS = [

    "NONE",
    "MINIMAL",
    "PARTIAL",
    "SUBSTANTIAL",
    "COMPLETE"
];


const SENTENCE_CLASSES = [

    "CLASS I",
    "CLASS II",
    "CLASS III",
    "CLASS IV",
    "CLASS V",
    "CLASS VI",
    "CLASS VII",
    "CLASS VIII",
    "CLASS IX",
    "CLASS X"
];


const SENTENCE_TYPES = [

    "LIMITED DURATION",
    "EXTENDED DURATION",
    "INDEFINITE",
    "CONTINUOUS",
    "RECURSIVE",
    "NON-LINEAR",
    "PERPETUAL"
];


/* =========================================================
   DATABASE STATE
========================================================= */

const db = {

    universeSeed: 0,

    cases: new Map(),

    nameInstances: new Map(),

    transactions: new Map(),

    sessionCreated: null

};


/* =========================================================
   HASH
========================================================= */

function hashString(value) {

    value = String(value);

    let hash = 2166136261;

    for (let i = 0; i < value.length; i++) {

        hash ^= value.charCodeAt(i);

        hash =
            Math.imul(
                hash,
                16777619
            );
    }

    hash += hash << 13;
    hash ^= hash >>> 7;
    hash += hash << 3;
    hash ^= hash >>> 17;
    hash += hash << 5;

    return hash >>> 0;
}


/* =========================================================
   RANDOM NUMBER GENERATOR
========================================================= */

function RNG(seed) {

    let x =
        (seed >>> 0) ||
        0xA341316C;

    return {

        next() {

            x ^= x << 13;
            x >>>= 0;

            x ^= x >>> 17;
            x >>>= 0;

            x ^= x << 5;
            x >>>= 0;

            return (
                x >>> 0
            ) / 4294967296;
        },

        int(max) {

            if (max <= 0) {
                return 0;
            }

            return Math.floor(
                this.next() * max
            );
        },

        pick(array) {

            return array[
                this.int(array.length)
            ];
        },

        bool(probability = 0.5) {

            return (
                this.next() <
                probability
            );
        },

        range(min, max) {

            return (
                min +
                Math.floor(
                    this.next() *
                    (max - min + 1)
                )
            );
        }

    };
}


/* =========================================================
   UTILITIES
========================================================= */

function pad(number, length) {

    return String(number)
        .padStart(length, "0");
}


function normalizeName(name) {

    return String(name)
        .trim()
        .replace(/\s+/g, " ")
        .toUpperCase();
}


function titleCaseName(name) {

    return name
        .toLowerCase()
        .split(" ")
        .map(
            part =>
                part.charAt(0).toUpperCase() +
                part.slice(1)
        )
        .join(" ");
}


function randomDate(rng, startYear, endYear) {

    const year =
        rng.range(
            startYear,
            endYear
        );

    const month =
        rng.range(1, 12);

    const day =
        rng.range(
            1,
            28
        );

    return (
        `${year}-` +
        `${pad(month, 2)}-` +
        `${pad(day, 2)}`
    );
}


function dateYear(date) {

    return Number(
        String(date).slice(0, 4)
    );
}


function formatDuration(years) {

    if (years <= 0) {
        return "0 YEARS";
    }

    if (years === 1) {
        return "1 YEAR";
    }

    return `${years} YEARS`;
}


function uniquePick(rng, array, count) {

    const copy =
        array.slice();

    const result = [];

    while (
        result.length < count &&
        copy.length > 0
    ) {

        const index =
            rng.int(copy.length);

        result.push(
            copy.splice(
                index,
                1
            )[0]
        );
    }

    return result;
}


/* =========================================================
   RANDOM SOUL NUMBER
========================================================= */

function randomSoulNumber(rng) {

    return pad(
        rng.range(
            1,
            999999999
        ),
        9
    );
}


/* =========================================================
   IDENTIFIERS
========================================================= */

function makeAuditorId(rng) {

    return (
        "AUD-" +
        pad(
            rng.range(
                1,
                999999
            ),
            6
        )
    );
}


function makeAdjusterId(rng) {

    return (
        "ADJ-" +
        pad(
            rng.range(
                1,
                999999
            ),
            6
        )
    );
}


function makeTribunalId(rng) {

    return (
        "TRB-" +
        pad(
            rng.range(
                1,
                999999
            ),
            6
        )
    );
}


function makeDecreeId(rng) {

    return (
        "DEC-" +
        pad(
            rng.range(
                1,
                99999999
            ),
            8
        )
    );
}


function makeImplementationId(rng) {

    return (
        "IMP-" +
        pad(
            rng.range(
                1,
                99999999
            ),
            8
        )
    );
}


function makeTransactionId(rng) {

    return (
        "TXN-" +
        pad(
            rng.range(
                1,
                999999999
            ),
            9
        )
    );
}


/* =========================================================
   CONTRADICTION GENERATION
========================================================= */

function generateContradictions(
    rng,
    offense,
    intent,
    age
) {

    /*
        Most cases contain no major contradiction.

        Some contain ordinary contradictions.

        A smaller percentage contains contradictions that
        cannot be reconciled using human logic.
    */

    const roll =
        rng.next();

    let count = 0;

    if (roll < 0.46) {

        count = 0;

    } else if (roll < 0.76) {

        count = 1;

    } else if (roll < 0.92) {

        count = 2;

    } else {

        count = rng.range(3, 5);
    }

    const contradictions = [];

    for (
        let i = 0;
        i < count;
        i++
    ) {

        const impossible =
            rng.bool(0.28);

        const type =
            impossible
                ? rng.pick(
                    IMPOSSIBLE_CONTRADICTIONS
                )
                : rng.pick(
                    CONTRADICTION_TYPES
                );

        let description;

        if (impossible) {

            description =
                generateImpossibleContradiction(
                    rng,
                    type,
                    offense,
                    intent
                );

        } else {

            description =
                generateOrdinaryContradiction(
                    rng,
                    type,
                    offense,
                    intent,
                    age
                );
        }

        contradictions.push({

            id:
                `CTR-${pad(
                    i + 1,
                    2
                )}`,

            type,

            impossible,

            description,

            resolution:
                impossible
                    ? "UNRESOLVED"
                    : rng.pick([
                        "RECONCILED",
                        "PARTIALLY RECONCILED",
                        "UNRESOLVED"
                    ])

        });
    }

    return contradictions;
}


function generateOrdinaryContradiction(
    rng,
    type,
    offense,
    intent,
    age
) {

    const templates = {

        "MEMORY CONFLICT":
            `SUBJECT PROVIDES TWO DISTINCT RECOLLECTIONS OF THE ${offense.title.toUpperCase()} EVENT.`,

        "INTENT CONFLICT":
            `SUBJECT FIRST DESCRIBES THE EVENT AS ACCIDENTAL AND LATER DESCRIBES DELIBERATE PREPARATION.`,

        "TEMPORAL DISCONTINUITY":
            `SUBJECT'S ACCOUNT PLACES A VERIFIED EVENT APPROXIMATELY ${rng.range(3, 19)} MINUTES OUTSIDE THE RECORDED SEQUENCE.`,

        "SELF-IDENTIFICATION CONFLICT":
            `SUBJECT REFERS TO THEMSELF USING A DIFFERENT IDENTITY DURING ONE RECORDED MEMORY.`,

        "MOTIVE CONFLICT":
            `SUBJECT ASSERTS ${intent.toUpperCase()} AS MOTIVE WHILE OTHER EVIDENCE INDICATES A SECONDARY MOTIVE.`,

        "WITNESS MEMORY CONFLICT":
            `SUBJECT'S MEMORY OF THE WITNESS ACCOUNT DIFFERS FROM THE WITNESS ACCOUNT RECORDED BY THE AUDITOR.`,

        "CAUSALITY CONFLICT":
            `SUBJECT ATTRIBUTES THE EVENT TO A CAUSE NOT SUPPORTED BY THE REMAINING RECORD.`,

        "EMOTIONAL RESPONSE CONFLICT":
            `SUBJECT REMEMBERS FEAR AT THE EVENT WHILE ANOTHER MEMORY STATE INDICATES CALM OBSERVATION.`,

        "CONFESSION CONFLICT":
            `SUBJECT CONFESSES TO THE EVENT BUT DENIES THE SAME EVENT IN A LATER STATEMENT.`,

        "UNRESOLVED RECOLLECTION":
            `SUBJECT REMEMBERS THE EVENT BUT CANNOT ESTABLISH WHETHER THE MEMORY REPRESENTS OBSERVATION OR PARTICIPATION.`
    };

    return (
        templates[type] ||
        "CONTRADICTORY MATERIAL DETECTED."
    );
}


function generateImpossibleContradiction(
    rng,
    type,
    offense,
    intent
) {

    const templates = {

        "SIMULTANEOUS MEMORY STATES":
            "SUBJECT PRESENTS TWO MUTUALLY EXCLUSIVE MEMORY STATES AS SIMULTANEOUSLY TRUE. BOTH STATES VERIFIED.",

        "UNRECORDED KNOWLEDGE":
            "SUBJECT POSSESSES VERIFIED KNOWLEDGE OF AN EVENT FOR WHICH NO OBSERVABLE INFORMATION CHANNEL EXISTS.",

        "NON-SEQUENTIAL RECOLLECTION":
            "SUBJECT REMEMBERS A LATER EVENT BEFORE THE EARLIER EVENT OCCURRED. BOTH MEMORIES ARE STABLE.",

        "IDENTITY DISPLACEMENT":
            "SUBJECT DESCRIBES ANOTHER PERSON'S MEMORY IN THE FIRST PERSON. THE DESCRIBED MEMORY IS VERIFIED.",

        "UNWITNESSED MEMORY":
            "SUBJECT PROVIDES ACCURATE DETAILS OF AN EVENT FOR WHICH NO WITNESS OR RECORDING EXISTS.",

        "CAUSALITY CONFLICT":
            "THE RECORDED EVENT APPEARS TO HAVE OCCURRED BEFORE ITS VERIFIED CAUSE.",

        "DUPLICATE EVENT STATE":
            "TWO DISTINCT INSTANCES OF THE SAME EVENT ARE VERIFIED WITH IDENTICAL PARTICIPANTS AND IDENTICAL CONSEQUENCES.",

        "OBSERVATION WITHOUT OBSERVER":
            "AN OBSERVATION IS VERIFIED WITHOUT A CORRESPONDING OBSERVER BEING PRESENT AT THE RECORDED LOCATION.",

        "MEMORY OF AN EVENT BEFORE OCCURRENCE":
            "SUBJECT RECORDED THE MEMORY OF THE EVENT PRIOR TO THE EARLIEST VERIFIED OCCURRENCE OF THE EVENT.",

        "MEMORY PERSISTING AFTER SUBJECT DEATH":
            "AUDITOR RECORD CONTAINS SUBJECT MEMORY MATERIAL DATED AFTER THE VERIFIED TIME OF DEATH."
    };

    return (
        templates[type] ||
        "NO HUMAN-INTELLIGIBLE RESOLUTION AVAILABLE."
    );
}


/* =========================================================
   CASE GENERATION
========================================================= */

function generateCase(
    queryKey,
    requestedName = null,
    forcedSoulNumber = null
) {

    const seed =
        hashString(
            `${db.universeSeed}|${queryKey}`
        );

    const rng =
        RNG(seed);


    /*
        -----------------------------------------------------
        IDENTITY
        -----------------------------------------------------
    */

    let fullName;

    if (requestedName) {

        fullName =
            titleCaseName(
                requestedName
            );

    } else {

        fullName =
            `${rng.pick(FIRST_NAMES)} ${rng.pick(LAST_NAMES)}`;
    }


    let soulNumber;

    if (forcedSoulNumber) {

        soulNumber =
            pad(
                Number(forcedSoulNumber),
                9
            );

    } else {

        soulNumber =
            randomSoulNumber(rng);
    }


    /*
        Prevent a procedural collision with another case
        already generated during this session.
    */

    while (
        db.cases.has(
            `SOUL:${soulNumber}`
        )
    ) {

        soulNumber =
            randomSoulNumber(rng);
    }


    const sex =
        rng.pick([
            "MALE",
            "FEMALE",
            "UNSPECIFIED"
        ]);


    /*
        -----------------------------------------------------
        LIFE
        -----------------------------------------------------
    */

    const birthYear =
        rng.range(
            1800,
            2020
        );

    const lifespan =
        rng.range(
            14,
            101
        );

    const deathYear =
        birthYear +
        lifespan;


    const birthDate =
        randomDate(
            rng,
            birthYear,
            birthYear
        );


    const deathDate =
        randomDate(
            rng,
            deathYear,
            deathYear
        );


    const ageAtDeath =
        lifespan;


    const origin =
        rng.pick(
            ORIGINS
        );


    const occupation =
        rng.pick(
            OCCUPATIONS
        );


    /*
        -----------------------------------------------------
        PRIMARY OFFENSE
        -----------------------------------------------------
    */

    const offense =
        rng.pick(
            OFFENSES
        );


    const intent =
        rng.pick(
            offense.intents
        );


    /*
        -----------------------------------------------------
        FACTORS
        -----------------------------------------------------
    */

    const mitigationCount =
        rng.next() < 0.48
            ? rng.range(0, 2)
            : rng.range(1, 4);


    const aggravationCount =
        rng.next() < 0.50
            ? rng.range(0, 2)
            : rng.range(1, 4);


    const mitigating =
        uniquePick(
            rng,
            MITIGATING_FACTORS,
            Math.min(
                mitigationCount,
                MITIGATING_FACTORS.length
            )
        );


    const aggravating =
        uniquePick(
            rng,
            AGGRAVATING_FACTORS,
            Math.min(
                aggravationCount,
                AGGRAVATING_FACTORS.length
            )
        );


    /*
        -----------------------------------------------------
        REMORSE
        -----------------------------------------------------
    */

    const remorse =
        rng.pick(
            REMORSE_LEVELS
        );


    /*
        -----------------------------------------------------
        SELF JUSTIFICATION
        -----------------------------------------------------
    */

    const selfJustifications = [

        "SUBJECT ACCEPTS PERSONAL RESPONSIBILITY.",

        "SUBJECT ATTRIBUTES CONDUCT TO CIRCUMSTANCES.",

        "SUBJECT CLAIMS THE CONDUCT WAS NECESSARY.",

        "SUBJECT ASSERTS THAT THE VICTIM CAUSED THE EVENT.",

        "SUBJECT MAINTAINS THAT NO ALTERNATIVE EXISTED.",

        "SUBJECT DENIES THAT THE CONDUCT WAS MORALLY WRONG.",

        "SUBJECT STATES THAT THE CONSEQUENCES WERE UNINTENDED.",

        "SUBJECT DESCRIBES THE CONDUCT AS JUSTIFIED RETALIATION.",

        "SUBJECT CLAIMS THAT OTHERS WOULD HAVE DONE THE SAME.",

        "SUBJECT PROVIDES NO JUSTIFICATION."
    ];


    const selfJustification =
        rng.pick(
            selfJustifications
        );


    /*
        -----------------------------------------------------
        CONTRADICTIONS
        -----------------------------------------------------
    */

    const contradictions =
        generateContradictions(
            rng,
            offense,
            intent,
            ageAtDeath
        );


    /*
        -----------------------------------------------------
        SENTENCING WEIGHT
        -----------------------------------------------------
    */

    let sentencingWeight =
        offense.base;


    for (
        const factor
        of mitigating
    ) {

        sentencingWeight +=
            factor.weight;
    }


    for (
        const factor
        of aggravating
    ) {

        sentencingWeight +=
            factor.weight;
    }


    if (
        remorse === "COMPLETE"
    ) {

        sentencingWeight -= 8;

    } else if (
        remorse === "SUBSTANTIAL"
    ) {

        sentencingWeight -= 4;

    } else if (
        remorse === "NONE"
    ) {

        sentencingWeight += 6;
    }


    /*
        Contradictions do not automatically increase
        punishment.

        They increase administrative review burden.
    */

    const contradictionCount =
        contradictions.length;


    const administrativeBurden =
        contradictionCount * 4;


    /*
        -----------------------------------------------------
        SENTENCE
        -----------------------------------------------------
    */

    const adjustedWeight =
        Math.max(
            1,
            sentencingWeight
        );


    let sentenceClassIndex =
        Math.floor(
            adjustedWeight / 15
        );


    sentenceClassIndex =
        Math.min(
            9,
            Math.max(
                0,
                sentenceClassIndex
            )
        );


    const sentenceClass =
        SENTENCE_CLASSES[
            sentenceClassIndex
        ];


    let sentenceType;

    if (
        contradictions.some(
            c => c.impossible
        )
    ) {

        sentenceType =
            rng.pick([
                "INDEFINITE",
                "NON-LINEAR",
                "RECURSIVE"
            ]);

    } else {

        sentenceType =
            rng.pick([
                "LIMITED DURATION",
                "EXTENDED DURATION",
                "INDEFINITE",
                "CONTINUOUS"
            ]);
    }


    let sentenceYears =
        Math.round(
            adjustedWeight *
            rng.range(
                2,
                8
            )
        );


    sentenceYears =
        Math.max(
            1,
            sentenceYears
        );


    if (
        sentenceType ===
        "PERPETUAL"
    ) {

        sentenceYears = 0;
    }


    /*
        -----------------------------------------------------
        STATUS
        -----------------------------------------------------
    */

    const statuses = [

        "ACTIVE",

        "SENTENCE IMPLEMENTED",

        "PROCESSING COMPLETE",

        "ADMINISTRATIVE REVIEW",

        "IMPLEMENTATION PENDING"
    ];


    const status =
        rng.pick(
            statuses
        );


    /*
        -----------------------------------------------------
        PERSONNEL
        -----------------------------------------------------
    */

    const auditorId =
        makeAuditorId(rng);

    const adjusterId =
        makeAdjusterId(rng);

    const tribunalId =
        makeTribunalId(rng);

    const decreeId =
        makeDecreeId(rng);

    const implementationId =
        makeImplementationId(rng);


    /*
        -----------------------------------------------------
        CASE NUMBER
        -----------------------------------------------------
    */

    const caseNumber =
        `CRA-${dateYear(deathDate)}-` +
        `${pad(
            rng.range(
                1,
                999999
            ),
            6
        )}`;


    /*
        -----------------------------------------------------
        ARRIVAL
        -----------------------------------------------------
    */

    const arrivalDate =
        randomDate(
            rng,
            deathYear,
            deathYear + 2
        );


    /*
        -----------------------------------------------------
        FORMS
        -----------------------------------------------------
    */

    const forms = [

        {
            id: "AUD-01.0",
            title: "INITIAL INTAKE RECORD",
            office: "AUDITOR",
            status: "COMPLETE"
        },

        {
            id: "AUD-66.6",
            title: "CONFESSION AND SELF-ACCOUNT",
            office: "AUDITOR",
            status:
                remorse === "NONE"
                    ? "PARTIAL"
                    : "COMPLETE"
        },

        {
            id: "AUD-13.7",
            title: "CONTRADICTION REGISTER",
            office: "AUDITOR",
            status:
                contradictionCount > 0
                    ? "EXCEPTION NOTED"
                    : "CLEAR"
        },

        {
            id: "ADJ-02.3",
            title: "RECORD CODIFICATION",
            office: "ADJUSTER",
            status: "COMPLETE"
        },

        {
            id: "ADJ-18.9",
            title: "INTENT ASSESSMENT",
            office: "ADJUSTER",
            status: "COMPLETE"
        },

        {
            id: "ADJ-44.1",
            title: "MITIGATION / AGGRAVATION REVIEW",
            office: "ADJUSTER",
            status: "COMPLETE"
        },

        {
            id: "ADJ-77.0",
            title: "SENTENCING BRIEF",
            office: "ADJUSTER",
            status: "COMPLETE"
        },

        {
            id: "TRB-01.1",
            title: "TRIBUNAL DELIBERATION",
            office: "TRIBUNAL",
            status: "COMPLETE"
        },

        {
            id: "TRB-09.9",
            title: "FINAL DECREE",
            office: "TRIBUNAL",
            status: "ISSUED"
        },

        {
            id: "IMP-04.2",
            title: "IMPLEMENTATION AUTHORIZATION",
            office: "IMPLEMENTATION",
            status:
                status ===
                "IMPLEMENTATION PENDING"
                    ? "PENDING"
                    : "COMPLETE"
        }
    ];


    /*
        -----------------------------------------------------
        CONFESSION
        -----------------------------------------------------
    */

    const confessionTemplates = [

        "SUBJECT ADMITS THE CONDUCT BUT DISPUTES ITS SIGNIFICANCE.",

        "SUBJECT DENIES RESPONSIBILITY FOR THE PRIMARY EVENT.",

        "SUBJECT ADMITS PARTICIPATION AND STATES THAT THE CONSEQUENCES WERE EXPECTED.",

        "SUBJECT ADMITS PARTICIPATION BUT CLAIMS COERCION.",

        "SUBJECT PROVIDES A DETAILED ACCOUNT WITH NO SIGNIFICANT OMISSIONS.",

        "SUBJECT REFUSES TO PROVIDE A COHERENT ACCOUNT.",

        "SUBJECT CONFESSES AFTER EXTENDED DENIAL.",

        "SUBJECT STATES THAT THE EVENT HAS BEEN MISREPRESENTED."
    ];


    const confession =
        rng.pick(
            confessionTemplates
        );


    /*
        -----------------------------------------------------
        TRIBUNAL FINDING
        -----------------------------------------------------
    */

    const tribunalFindings = [

        "RECORD SUFFICIENT FOR SENTENCING.",

        "AGGRAVATING FACTORS SUBSTANTIATED.",

        "MITIGATING FACTORS ACCEPTED IN PART.",

        "SUBJECT'S ACCOUNT FOUND CREDIBLE IN MATERIAL RESPECTS.",

        "SUBJECT'S ACCOUNT FOUND PARTIALLY CREDIBLE.",

        "NO DISQUALIFYING AUDITOR ERROR IDENTIFIED.",

        "UNRESOLVED AUDITOR MATERIAL REVIEWED.",

        "RECORD COMPLETE DESPITE UNRESOLVED CONTRADICTIONS."
    ];


    const tribunalFinding =
        rng.pick(
            tribunalFindings
        );


    /*
        -----------------------------------------------------
        RELATED SOULS
        -----------------------------------------------------
    */

    const relatedCount =
        rng.range(
            1,
            3
        );


    const relatedSouls = [];


    for (
        let i = 0;
        i < relatedCount;
        i++
    ) {

        const relatedSeed =
            hashString(
                `${seed}|RELATED|${i}`
            );


        const relatedRng =
            RNG(
                relatedSeed
            );


        let relatedSoul =
            randomSoulNumber(
                relatedRng
            );


        /*
            Related records are generated as part of this
            case graph.

            We don't recursively generate their related
            records. This keeps the graph finite.
        */

        const relation =
            relatedRng.pick(
                RELATION_TYPES
            );


        let relatedName =
            `${relatedRng.pick(FIRST_NAMES)} ` +
            `${relatedRng.pick(LAST_NAMES)}`;


        /*
            Extremely small possibility of same name is
            allowed intentionally.
        */

        relatedSouls.push({

            soulNumber:
                relatedSoul,

            name:
                relatedName,

            relation,

            caseKey:
                `RELATED:${soulNumber}:${i}`
        });
    }


    /*
        -----------------------------------------------------
        TRANSACTIONS
        -----------------------------------------------------
    */

    const transactions = [];


    function addTransaction(
        type,
        description,
        actor
    ) {

        const transactionId =
            makeTransactionId(rng);


        const transaction = {

            id:
                transactionId,

            type,

            actor,

            description,

            timestamp:
                randomDate(
                    rng,
                    deathYear,
                    deathYear + 3
                ),

            soulNumber

        };


        transactions.push(
            transaction
        );


        db.transactions.set(
            transactionId,
            transaction
        );
    }


    addTransaction(
        "INTAKE",
        "SOUL RECORD ACCEPTED INTO CENTRAL INDEX.",
        "INTAKE CLERK"
    );


    addTransaction(
        "AUDIT-OPEN",
        "AUDITOR ASSIGNED. LIFE RECORD RECONSTRUCTION COMMENCED.",
        auditorId
    );


    addTransaction(
        "AUDIT-COMPLETE",
        "AUDITOR CERTIFIED RECORD COMPLETE.",
        auditorId
    );


    addTransaction(
        "ADJUST",
        "RECORD CODIFIED FOR SENTENCING REVIEW.",
        adjusterId
    );


    addTransaction(
        "TRIBUNAL",
        "SENTENCING TRIBUNAL CONVENED.",
        tribunalId
    );


    addTransaction(
        "DECREE",
        "FINAL DECREE ISSUED.",
        decreeId
    );


    addTransaction(
        "IMPLEMENT",
        "IMPLEMENTATION ORDER ENTERED.",
        implementationId
    );


    /*
        -----------------------------------------------------
        MASTER RECORD
        -----------------------------------------------------
    */

    const record = {

        queryKey,

        soulNumber,

        caseNumber,

        name: fullName,

        sex,

        birthDate,

        deathDate,

        age: ageAtDeath,

        lifespan,

        origin,

        occupation,

        offense:
            offense.title,

        offenseSeverity:
            offense.severity,

        location:
            rng.pick(
                LOCATIONS
            ),

        intent,

        mitigating,

        aggravating,

        remorse,

        selfJustification,

        confession,

        contradictions,

        contradictionCount,

        administrativeBurden,

        auditorId,

        adjusterId,

        tribunalId,

        decreeId,

        implementationId,

        arrivalDate,

        sentencingClass:
            sentenceClass,

        sentenceType,

        sentenceYears,

        status,

        tribunalFinding,

        relatedSouls,

        forms,

        transactions,

        createdAt:
            new Date().toISOString(),

        /*
            Generated explanatory material
        */

        auditorConclusion:
            contradictionCount > 0
                ? "THE RECORD IS COMPLETE. THE RECORD IS NOT NECESSARILY COMPREHENSIBLE."
                : "THE RECORD IS COMPLETE.",

        adjusterRecommendation:
            `RECOMMENDED ${sentenceClass} / ${sentenceType}.`,

        implementationFinding:
            status ===
            "IMPLEMENTATION PENDING"
                ? "IMPLEMENTATION ORDER ISSUED. EXECUTION PENDING."
                : "IMPLEMENTATION ORDER EXECUTED."
    };


    /*
        Store primary case.
    */

    db.cases.set(
        `SOUL:${soulNumber}`,
        record
    );


    /*
        Store related records as lightweight records.
    */

    for (
        const related
        of relatedSouls
    ) {

        const relatedRecord = {

            soulNumber:
                related.soulNumber,

            name:
                related.name,

            relation:
                related.relation,

            parentSoul:
                soulNumber,

            caseNumber:
                `CRA-REL-${related.soulNumber}`,

            generatedRelationOnly:
                true

        };


        /*
            Do not overwrite an independently generated
            soul record.
        */

        const relatedKey =
            `SOUL:${related.soulNumber}`;


        if (
            !db.cases.has(
                relatedKey
            )
        ) {

            db.cases.set(
                relatedKey,
                relatedRecord
            );
        }
    }


    return record;
}


/* =========================================================
   SOUL LOOKUP
========================================================= */

function ensureSoul(
    soulNumber
) {

    const normalized =
        String(soulNumber)
            .replace(/\D/g, "");


    if (!normalized) {
        return null;
    }


    const padded =
        pad(
            Number(normalized),
            9
        );


    const key =
        `SOUL:${padded}`;


    if (
        db.cases.has(key)
    ) {

        return db.cases.get(key);
    }


    return generateCase(
        key,
        null,
        padded
    );
}


/* =========================================================
   NAME LOOKUP
========================================================= */

function ensureName(
    fullName
) {

    const normalized =
        normalizeName(
            fullName
        );


    if (
        !/^[A-Z]+ [A-Z]+(?: [A-Z]+)*$/.test(
            normalized
        )
    ) {

        return null;
    }


    /*
        Names are NOT unique.

        Every NAME query can therefore produce a new
        historical person with the same name.

        The returned soul number can then be used to
        retrieve that exact record.
    */

    const previous =
        db.nameInstances.get(
            normalized
        ) || 0;


    const instance =
        previous + 1;


    db.nameInstances.set(
        normalized,
        instance
    );


    const key =
        `NAME:${normalized}:${instance}`;


    return generateCase(
        key,
        normalized
    );
}


/* =========================================================
   CASE LOOKUP
========================================================= */

function ensureCase(
    caseNumber
) {

    const normalized =
        String(caseNumber)
            .trim()
            .toUpperCase();


    for (
        const record
        of db.cases.values()
    ) {

        if (
            record.caseNumber ===
            normalized
        ) {

            return record;
        }
    }


    /*
        A case number can also generate a record if it
        has not yet been indexed during this session.

        This keeps the apparent archive effectively
        unbounded.
    */

    const key =
        `CASE:${normalized}`;


    const generated =
        generateCase(
            key
        );


    generated.caseNumber =
        normalized;


    return generated;
}


/* =========================================================
   PERSONNEL LOOKUP
========================================================= */

function findByPersonnel(
    identifier,
    field
) {

    const normalized =
        String(identifier)
            .trim()
            .toUpperCase();


    for (
        const record
        of db.cases.values()
    ) {

        if (
            record[field] ===
            normalized
        ) {

            return record;
        }
    }


    return null;
}


/* =========================================================
   TRANSACTION LOOKUP
========================================================= */

function getTransaction(
    transactionId
) {

    return db.transactions.get(
        String(transactionId)
            .trim()
            .toUpperCase()
    ) || null;
}


/* =========================================================
   RANDOM CASE
========================================================= */

function randomCase() {

    const rng =
        RNG(
            hashString(
                `${db.universeSeed}|RANDOM|${Date.now()}`
            )
        );


    return ensureSoul(
        randomSoulNumber(
            rng
        )
    );
}


/* =========================================================
   SESSION INITIALIZATION
========================================================= */

function bootDatabase() {

    let seed = 0;

    try {

        const buffer =
            new Uint32Array(2);

        crypto.getRandomValues(
            buffer
        );

        seed =
            (
                buffer[0] ^
                buffer[1]
            ) >>> 0;

    } catch (
        error
    ) {

        seed =
            (
                Date.now() ^
                Math.floor(
                    Math.random() *
                    0xFFFFFFFF
                )
            ) >>> 0;
    }


    db.universeSeed =
        seed;


    db.sessionCreated =
        new Date();


    db.cases.clear();

    db.nameInstances.clear();

    db.transactions.clear();


    return seed;
}


/* =========================================================
   PUBLIC API
========================================================= */

window.CRA_DB = {

    db,

    bootDatabase,

    ensureSoul,

    ensureName,

    ensureCase,

    findByPersonnel,

    getTransaction,

    randomCase,

    normalizeName

};