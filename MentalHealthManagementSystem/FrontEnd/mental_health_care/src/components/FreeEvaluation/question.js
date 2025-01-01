const qBank = [
    {
        question:
        "Have you ever experienced a terrible occurrence that has impacted you significantly?",
        optionlist: ["never", "rare", "mild", "Frequently"],
        
        questionId: "000001"
    },

    {
        question:
        "Have you ever experienced an attack of fear, anxiety, or panic?",
        optionlist: ["never", "rare", "mild", "Frequently"],
        
        questionId: "000002"
    },


    {
        question:
        "Did you face symptoms of isomania?",
        optionlist: ["never", "rare", "mild", "Frequently"],
        
        questionId: "000003"
    },

    {
        question:
        "How often over the past few weeks have you felt the future was bleak?",
        optionlist: ["never", "rare", "mild", "Frequently"],
        
        questionId: "000004"
    },



    {
        question:
        "How often you get distracted from your work",
        optionlist: ["never", "rare", "mild", "Frequently"],
        
        questionId: "000005"
    },



    {
        question:
        "Do you consume additive substances?",
        optionlist: ["never", "rare", "mild", "Frequently"],
        
        questionId: "000006"
    },


    {
        question:
        "Do you get carried away with day dreaming?",
        optionlist: ["never", "rare", "mild", "Frequently"],
        questionId: "000007"
    },



    {
        question:
        "How is your social interaction?",
        optionlist: ["never", "rare", "mild", "Frequently"],
        
        questionId: "000008"
    },

    {
        question:
        "Is your Appetite increased or decreased ?",
        optionlist: ["never", "rare", "mild", "Frequently"],
        
        questionId: "000009"
    },

    {
        question:
        "How often do you read and travel?",
        optionlist: ["never", "rare", "mild", "Frequently"],
        
        questionId: "000010"
    },

    
    ];
    
    // n = 5 to export 5 question
    export default (n = 10) =>
    Promise.resolve(qBank.sort(() => 0.5 - Math.random()).slice(0, n));
    