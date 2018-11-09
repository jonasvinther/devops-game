var questions = [
    {
        "question": "We need to get this release out immediately. Should we skip the pipeline?",
        "answers": [
            {
                "answer": "That is a very bad idea",
                "ratings": [-20,-10,10,20]
            }, 
            {
                "answer": "It is okay this time",
                "ratings": [20,10,0,-20]
            }
        ]
    },
    {
        "question": "Should we spend the next sprint working on internal quality?",
        "answers": [
            {
                "answer": "Yes, it is a good long term investment",
                "ratings": [20,20,-20,-20]
            }, 
            {
                "answer": "Features are more important at the moment",
                "ratings": [-20,-20,20,20]
            }
        ]
    },
    {
        "question": "Should we get an intern?",
        "answers": [
            {
                "answer": "Yes, free labor rocks!",
                "ratings": [-20,0,20,0]
            }, 
            {
                "answer": "We don't have time to teach them",
                "ratings": [20,0,-20,0]
            }
        ]
    },
    {
        "question": "Should we increase focus on unittests right now?",
        "answers": [
            {
                "answer": "TDD should be in our DNA",
                "ratings": [30,-10,-10,-10]
            }, 
            {
                "answer": "We have other issues right now",
                "ratings": [-20,10,10,10]
            }
        ]
    },
    {
        "question": "Production is down, we're bleeding money. Fix it!",
        "answers": [
            {
                "answer": "We're on it!",
                "ratings": [-20,-10,0,0]
            }, 
            {
                "answer": "We're on it!",
                "ratings": [-20,-10, 0, 0]
            }
        ]
    },
    {
        "question": "Our budget was conservative, so we have some surplus funds",
        "answers": [
            {
                "answer": "We should do a team day",
                "ratings": [0,25,0,0]
            }, 
            {
                "answer": "We need to build some reserve funds",
                "ratings": [0,-10, 0, 25]
            }
        ]
    }
]

exports.questions = questions;