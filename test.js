function check_me() {
    const answers = {
      q1: document.querySelector('input[name="Q1"]:checked') ? document.querySelector('input[name="Q1"]:checked').value : null,
      q2: document.querySelector('input[name="Q2"]:checked') ? document.querySelector('input[name="Q2"]:checked').value : null,
      q3: document.querySelector('input[name="Q3"]:checked') ? document.querySelector('input[name="Q3"]:checked').value : null,
      q4: document.querySelector('input[name="Q4"]:checked') ? document.querySelector('input[name="Q4"]:checked').value : null,
      q5: document.querySelector('input[name="Q5"]:checked') ? document.querySelector('input[name="Q5"]:checked').value : null
    };
  
    const answeredAllQuestions = Object.values(answers).every(answer => answer !== null);

    if (!answeredAllQuestions) {
      alert("Ви відповіли не на всі питання. Перевірьте себе!");
      return;
    }
  

    for (let i = 1; i <= 3; i++) {
      const feedbackElement = document.getElementById(`feedback${i}`);
      const correctAnswer = i === 3 ? '3' : `${i}`; 
  
      if (answers[`q${i}`] === correctAnswer) {
        feedbackElement.textContent = "Правильна відповідь!";
        feedbackElement.style.color = "green";
      } else {
        feedbackElement.textContent = "Неправильна відповідь.";
        feedbackElement.style.color = "red";
      }
    }  
  
    if (answers.q4 !== null) {
      const feedback4Element = document.getElementById('feedback4');
      const selectedOption4 = answers.q4;

      switch (selectedOption4) {
        case '0':
          feedback4Element.textContent = "Дякую, що поділилися своїми враженнями! Раді чути, що MSG Sphere вам сподобалася.";
          break;
        case '1':
          feedback4Element.textContent = "Дякую за ваш відгук! Нам приємно чути, що ви отримали позитивний досвід від MSG Sphere. Будь ласка, рекомендуйте нас своїм друзям!";
          break;
        case '2':
          feedback4Element.textContent = "Дякую за вашу чесність. Ваша думка для нас важлива. Ми будемо й надалі працювати над тим, щоб MSG Sphere подобалася всім.";
          break;
        case '3':
          feedback4Element.textContent = "Сподіваємося, що ви скоро зможете відвідати MSG Sphere і особисто відчути його атмосферу. Ми впевнені, що вам сподобається!";
          break;        
      }
      feedback4Element.style.color = "#49C2F2"; 
    }

    if (answers.q5 !== null) {
      const feedback5Element = document.getElementById('feedback5');
      const selectedOption5 = answers.q5;

      switch (selectedOption5) {
        case '0':
          feedback5Element.textContent = "Дякую, що поділилися своїми планами! Ми будемо раді бачити вас в MSG Sphere. Не забудьте поділитися своїми враженнями після відвідування!";
          break;
        case '1':
          feedback5Element.textContent = "Дякую за вашу зацікавленість! Слідкуйте за нашими анонсами нових подій на нашому веб-сайті або в соціальних мережах. Ми впевнені, що ви знайдете щось, що вас зацікавить!";
          break;
        case '2':
          feedback5Element.textContent = "Дякую за вашу чесність. Ми цінуємо вашу думку. Сподіваємося, що ви знайдете інші розваги, які вам сподобаються.";
          break;
        case '3':
          feedback5Element.textContent = "Дякуємо за вашу відвертість. Ми працюємо над тим, щоб зробити MSG Sphere доступнішим для ширшого кола людей. Сподіваємося, що ви зможете відвідати нас в майбутньому.";
          break;       
      }
      feedback5Element.style.color = "#49C2F2"; 
    }
}

function resetFeedback() {
    for (let i = 1; i <= 5; i++) {
        const feedbackElement = document.getElementById(`feedback${i}`);
        if (feedbackElement) {
            feedbackElement.textContent = ""; 
        }
    }
}