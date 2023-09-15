---
title: 'Is Machine Learning really important?'
date: '2023-09-15'
tags: ['AI', 'Machine Learning', 'Technology']
draft: false
summary: "In an era driven by technological advancements, the question of whether Machine Learning is truly important looms large. Join us as we delve into the world of AI and Machine Learning, exploring their significance in today's landscape. Discover how these technologies are reshaping industries, from healthcare to finance, and gain insights into their potential impact on our future. Dive into this thought-provoking discussion to better understand why Machine Learning is not just a buzzword but a transformative force shaping our world."
---

## Traditional Programming flow

![Traditional Programming](/public/static/images/AI/traditional-programming.jpg)

In traditional programming, we start by thinking of what we want to solve, then we list all the steps to solve the problem, this set of steps is called an algorithm. Then we translate the algorithm into code, and finally, we run the code to get the result.  
For example if we want to sort an array of numbers in ascending order, here are the steps we need to follow:

1. Read the array of numbers
2. Compare the first two numbers, if the first number is greater than the second number, swap them
3. Compare the second and third numbers, if the second number is greater than the third number, swap them
4. Repeat step 3 until the end of the array

This is a simple algorithm to sort an array of numbers, and here is the code to implement it in Python:

```python

def sort_array(array):
    for i in range(len(array)):
        for j in range(len(array) - 1):
            if array[j] > array[j + 1]:
                array[j], array[j + 1] = array[j + 1], array[j]
    return array

```

Now let's switch to another problem, detecting an object in an image.
What _are_ the steps we take when we recognize an object in a picture? We really don't know, since it all happens in our brain without us being consciously aware of it!  
Right back at the dawn of computing, in 1949, an IBM researcher named Arthur Samuel started working on a different way to get computers to complete tasks, which he called _machine learning_. In his classic 1962 essay "Artificial Intelligence: A Frontier of Automation", he wrote:

> Programming a computer for such computations is, at best, a difficult task, not primarily because of any inherent complexity in the computer itself but, rather, because of the need to spell out every minute step of the process in the most exasperating detail. Computers, as any programmer will tell you, are giant morons, not giant brains. They do exactly what you tell them to do, not what you mean for them to do. And they do it literally, without any of the cleverness that humans use to fill in the gaps and correct for mistakes.

His basic idea was this: **Instead of telling a computer the exact steps to solve a problem, show it examples of problems to solve and let it learn to solve the problems on its own.** And this is what is we call **Machine Learning.**

## Machine Learning flow

![Machine Learning](/public/static/images/AI/machine-learning.jpg)

In Machine Learning, we depart from the traditional programming paradigm. Rather than providing explicit step-by-step instructions, we feed the computer with data and allow it to discover patterns and make predictions. This approach is particularly powerful when dealing with complex tasks like image recognition, language translation, and recommendation systems.  
Machine Learning models learn from data by finding relationships, making predictions, and improving their performance over time. This capability has opened doors to numerous applications across various industries.

### Machine Learning in the real world

Let's say we want to filter spam emails from our inbox. We can use Machine Learning to train a model to recognize spam emails. We will feed the model with a large number of emails, some of them are spam and others are not. The model will learn from these examples and will be able to predict whether a new email is spam or not.
Here is the outline of steps we need to follow:

1. **Data Collection:**
   The first step is to gather a substantial dataset of emails that includes both spam and non-spam (ham) emails. This dataset will serve as the training data for our Machine Learning model. It's crucial to have a diverse and representative dataset that covers various types of spam emails.

2. **Data Preprocessing:**
   Before feeding the data to our model, we need to preprocess it. This involves tasks such as removing HTML tags, special characters, and formatting inconsistencies. Additionally, we may need to tokenize the text (splitting it into individual words or tokens) and perform other text cleaning operations.

3. **Feature Extraction:**
   To train our model, we need to represent the email data in a numerical format that Machine Learning algorithms can understand. Common techniques for feature extraction in text data include TF-IDF (Term Frequency-Inverse Document Frequency) and word embeddings like Word2Vec or GloVe. These techniques convert text into numerical vectors.

4. **Model Selection:**
   Choosing the right Machine Learning algorithm is crucial. In the case of text classification like spam detection, popular algorithms include Naive Bayes, Support Vector Machines (SVM), and more recently, deep learning methods such as Recurrent Neural Networks (RNNs) and Transformers. The choice depends on the complexity of the problem and the size of the dataset.

5. **Training the Model:**
   With the preprocessed data and a selected algorithm, we train the Machine Learning model. During training, the model learns to distinguish between spam and non-spam emails by adjusting its internal parameters based on the features extracted from the training data.

6. **Model Evaluation:**
   Once trained, we evaluate the model's performance using a separate dataset called the validation set. Common evaluation metrics for spam detection include accuracy, precision, recall, F1-score, and ROC-AUC (Receiver Operating Characteristic - Area Under the Curve). These metrics help us assess how well the model is identifying spam emails while minimizing false positives and false negatives.

7. **Hyperparameter Tuning:**
   Fine-tuning the model's hyperparameters is an iterative process aimed at optimizing its performance. This involves adjusting parameters like learning rate, batch size, and model architecture to achieve the best results.

8. **Deployment:**
   Once we have a well-performing model, we can deploy it to our email system. Incoming emails can be processed in real-time by the model, which will assign a spam score to each email based on its content. Emails with high spam scores can be automatically moved to the spam folder or flagged for review.

9. **Continuous Monitoring:**
   Spam email patterns can change over time, so it's essential to continuously monitor the model's performance and retrain it with new data periodically. This ensures that the model remains effective in filtering out evolving spam threats.

![Machine Learning](/public/static/images/AI/machine-learning-process-flow.jpg)

## Machine Learning vs. Traditional Programming

As we've seen, traditional programming involves explicitly specifying a set of rules and instructions for a computer to follow. This approach works well for relatively simple tasks, like sorting an array of numbers, where we can precisely define the steps required to achieve the desired outcome.

However, the limitations of traditional programming become apparent when we tackle complex problems that involve recognizing patterns, making predictions, or handling vast amounts of data, such as image recognition, natural language processing, and recommendation systems. In these cases, it's nearly impossible to anticipate and code every possible scenario and rule. Moreover, as systems and data evolve, maintaining and updating traditional programs can be an ongoing and resource-intensive challenge.

This is where machine learning shines. Instead of handcrafting explicit instructions, machine learning leverages data and algorithms to learn and adapt. Here's why machine learning is superior in such scenarios:
| Feature | Traditional Programming | Machine Learning |
|---|---|---|
| **Approach** | Explicitly telling the computer what to do | Providing the computer with data and letting it learn to solve the problem on its own |
| **Suitability** | Well-defined problems with known rules | Complex problems that are difficult or impossible to program explicitly |
| **Flexibility** | Programs are fixed once they are written | Models can be adapted to new data and changing conditions |
| **Automation** | Requires human intervention to run | Can make predictions automatically without any human intervention |
| **Common applications** | Scientific computing, business applications, web development | Image recognition, natural language processing, recommendation systems |

Here are some additional key differences between traditional programming and machine learning:

- **Traditional programming is typically rule-based, while machine learning is data-driven.** In traditional programming, the programmer writes a set of rules that the computer follows to solve a problem. In machine learning, the computer learns to solve a problem by analyzing data.
- **Traditional programming is typically top-down, while machine learning is typically bottom-up.** In traditional programming, the programmer starts by designing the overall program and then breaks it down into smaller tasks. In machine learning, the computer starts by learning from individual data points and then builds up to more complex patterns.
- **Traditional programming is typically deterministic, while machine learning is typically probabilistic.** In traditional programming, the computer always produces the same output for the same input. In machine learning, the computer's output may vary depending on the data it has been trained on.

Overall, traditional programming and machine learning are two different approaches to solving problems. Traditional programming is well-suited for problems that are well-defined and have known rules. Machine learning is well-suited for complex problems that are difficult or impossible to program explicitly.
