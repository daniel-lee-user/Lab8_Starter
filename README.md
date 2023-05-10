# Lab 8 - Starter

Daniel Lee

# Check Your Understanding Questions:

1. I would run my automated tests within a Github action that runs whenever code is pushed, in my Recipe project development pipeline. By doing so, people can check if their code works on GitHub and it also reinforces accountability whenever people push to he repository. People may forget to test their code locally, and running all the tests after development is finished would probably unearth a lot of bugs.
2. No, because a single function returning the correct output is not end to end test material (does not involve a lot of UI actions)
3. No because the message feature involves many parts of the UI interacting with each other (input field, submit button, sending the message, etc.).
4. Yes, because the max message length is one small part of the message UI, that you can check with a simple unit test (check if the message input field allows messages with more than 80 chars).