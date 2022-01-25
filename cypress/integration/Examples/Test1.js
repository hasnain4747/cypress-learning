/// <reference types="Cypress" />

import { config } from "chai"

describe('My First Test Suite', function() 
{

it('My FirstTest case',function() {

cy.viewport(1920, 1080),
cy.visit("https://alpha.braingymjr.com/")
cy.contains("Login").click()

cy.get('#login-email').type('braingymdemo104@gmail.com')
cy.get('#login-password').type('Test@123')
cy.get('.py-5 > .v-btn__content').click()
cy.wait(5000)
cy.contains('Practice').click()
cy.get('.subject-name.realworld').click()


cy.intercept({
    method : 'GET',
    url : 'https://alpha.braingymjr.com/api/practice-questionset?childId=19&level=14&subjectId=1&tags=Practice'
},
{
    statusCode : 200,
    body : {
        "id": 1267,
        "set_name": "MCQ",
        "type": null,
        "specification": null,
        "createdAt": "2022-01-24T17:17:33.000Z",
        "updatedAt": "2022-01-24T17:18:39.000Z",
        "status": "Active",
        "tags": "Practice",
        "level": 14,
        "subject_id": 1,
        "scheduledAt": null,
        "questions": [
            {
                "id": 2202,
                "title": "This is MCQ question",
                "type_id": 2,
                "is_active": 1,
                "subject_id": 1,
                "points": 100,
                "set_id": 1267,
                "status": "Active",
                "tags": "0",
                "specification": "{\"ansType\": \"Text Answer\", \"answerSet\": {\"A\": \"7\", \"B\": \"8\", \"C\": \"6\", \"D\": \"9\"}, \"discription\": \"How many days in a week?\", \"selectedAns\": \"A\", \"questionType\": \"Text Question\", \"questionImage\": null, \"questionImageText\": null, \"ansExplanationImage\": null, \"ansImageExplainationText\": \"7\"}",
                "subscriber_only": 0,
                "createdAt": "2022-01-24T17:18:33.000Z",
                "updatedAt": "2022-01-24T17:18:33.000Z",
                "level": 14,
                "questionType": {
                    "id": 2,
                    "type": "MCQ (Multiple Choice Questions)",
                    "template_name": "MCQ (Multiple Choice Questions)",
                    "is_active": 1,
                    "createdAt": "2021-07-18T06:21:08.192Z",
                    "updatedAt": "2021-07-18T06:21:08.192Z"
                }
            }
        ]
    }
     
}).as('MCQ')
cy.contains('Level 14').click()
cy.wait(2000)
cy.wait('@MCQ')
cy.get(':nth-child(2) > .option-value > .value').click()
cy.get('.check-answer-container > .v-btn > .v-btn__content').click()

cy.intercept({
    method : 'GET',
    url : 'https://alpha.braingymjr.com/api/practice-questionset?lastAttemptedQuestionSetId=1267&childId=19&level=14&subjectId=1&tags=Practice'
},
{
    statusCode : 200,
    body : {
        "id": 1267,
        "set_name": "MCQ",
        "type": null,
        "specification": null,
        "createdAt": "2022-01-24T17:17:33.000Z",
        "updatedAt": "2022-01-24T17:18:39.000Z",
        "status": "Active",
        "tags": "Practice",
        "level": 14,
        "subject_id": 1,
        "scheduledAt": null,
        "questions": [
            {
                "id": 2202,
                "title": "This is MCQ question",
                "type_id": 2,
                "is_active": 1,
                "subject_id": 1,
                "points": 100,
                "set_id": 1267,
                "status": "Active",
                "tags": "0",
                "specification": "{\"ansType\": \"Text Answer\", \"answerSet\": {\"A\": \"7\", \"B\": \"8\", \"C\": \"6\", \"D\": \"9\"}, \"discription\": \"How many days in a week?\", \"selectedAns\": \"A\", \"questionType\": \"Text Question\", \"questionImage\": null, \"questionImageText\": null, \"ansExplanationImage\": null, \"ansImageExplainationText\": \"7\"}",
                "subscriber_only": 0,
                "createdAt": "2022-01-24T17:18:33.000Z",
                "updatedAt": "2022-01-24T17:18:33.000Z",
                "level": 14,
                "questionType": {
                    "id": 2,
                    "type": "MCQ (Multiple Choice Questions)",
                    "template_name": "MCQ (Multiple Choice Questions)",
                    "is_active": 1,
                    "createdAt": "2021-07-18T06:21:08.192Z",
                    "updatedAt": "2021-07-18T06:21:08.192Z"
                }
            }
        ]
    }
     
}).as('MCQ1')
cy.get('.mx-2 > .v-btn__content').click() //
cy.wait('@MCQ1')
cy.wait(5000)
cy.get(':nth-child(2) > .option-value > .value').click()
cy.get('.check-answer-container > .v-btn > .v-btn__content').click()





})
} )