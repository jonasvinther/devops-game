var questions = [
    {
        "question": "We need to get this release out immediately. Should we skip the pipeline?",
        "answers": [
            {
                "answer": "That is a very bad idea",
                "ratings": [-10,-5,5,10]
            }, 
            {
                "answer": "It is okay this time",
                "ratings": [10,5,0,-10]
            }
        ]
    },
    {
        "question": "Should we spend the next sprint working on internal quality?",
        "answers": [
            {
                "answer": "Yes, it is a good long term investment",
                "ratings": [10,10,-10,-10]
            }, 
            {
                "answer": "Features are more important at the moment",
                "ratings": [-10,-10,10,10]
            }
        ]
    },
    {
        "question": "Should we get an intern?",
        "answers": [
            {
                "answer": "Yes, free labor rocks!",
                "ratings": [-10,0,10,0]
            }, 
            {
                "answer": "We don't have time to teach them",
                "ratings": [10,0,-10,0]
            }
        ]
    },
    {
        "question": "Should we increase focus on unittests right now?",
        "answers": [
            {
                "answer": "TDD should be in our DNA",
                "ratings": [15,-5,-5,-5]
            }, 
            {
                "answer": "We have other issues right now",
                "ratings": [-10,5,5,5]
            }
        ]
    }
]

exports.questions = questions;