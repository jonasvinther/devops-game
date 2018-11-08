var questions = [
    {
        "question": "We need to get this release out immediately. Should we skip the pipeline?",
        "answers": [
            {
                "answer": "Yes sir!",
                "ratings": [-10,-5,5,10]
            }, 
            {
                "answer": "No sir!",
                "ratings": [10,5,0,-10]
            }
        ]
    },
    {
        "question": "Should we spend the next sprint working on internal quality?",
        "answers": [
            {
                "answer": "This is very important",
                "ratings": [10,10,-10,-10]
            }, 
            {
                "answer": "Ain't nobody got time for that",
                "ratings": [-10,-10,10,10]
            }
        ]
    },
    {
        "question": "Should we get an intern?",
        "answers": [
            {
                "answer": "Sure",
                "ratings": [-10,0,10,0]
            }, 
            {
                "answer": "No way",
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
                "answer": "We do not have time for that",
                "ratings": [-10,5,5,5]
            }
        ]
    }
]

exports.questions = questions;