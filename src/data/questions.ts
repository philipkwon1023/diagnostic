import { Question } from '../types/question';

export const questions: Question[] = [
    { 
        "id": 1, 
        "text": "다음 적분을 계산하시오: $$\\int_{0}^{\\pi} \\sin x dx$$", 
        "options": ["$$0$$", "$$1$$", "$$2$$", "$$-1$$", "$$\\pi$$"], 
        "correctAnswer": 2, 
        "difficulty": 2, 
        "concept": 12, 
        "hasImage": false, 
        "imageUrl": "" 
    },
    { 
        "id": 2, 
        "text": "함수 $f(x) = x^2$의 $x = 3$에서의 미분 계수를 구하시오.", 
        "options": ["$$3$$", "$$6$$", "$$9$$", "$$12$$", "$$18$$"], 
        "correctAnswer": 1, 
        "difficulty": 1, 
        "concept": 5, 
        "hasImage": false, 
        "imageUrl": "" 
    },
    { 
        "id": 3, 
        "text": "다음 극한값을 구하시오: $$\\lim_{x \\to 0} \\frac{\\sin x}{x}$$", 
        "options": ["$$0$$", "$$\\frac{1}{2}$$", "$$1$$", "$$\\pi$$", "$$\\infty$$"], 
        "correctAnswer": 2, 
        "difficulty": 2, 
        "concept": 8, 
        "hasImage": false, 
        "imageUrl": "" 
    },
    { 
        "id": 4, 
        "text": "함수 $f(x) = e^x$의 역함수를 구하시오.", 
        "options": ["$$\\ln x$$", "$$\\log x$$", "$$e^{-x}$$", "$$\\frac{1}{x}$$", "$$x^e$$"], 
        "correctAnswer": 0, 
        "difficulty": 2, 
        "concept": 15, 
        "hasImage": false, 
        "imageUrl": "" 
    },
    { 
        "id": 5, 
        "text": "다음 급수의 합을 구하시오: $$\\sum_{n=1}^{\\infty} \\frac{1}{n^2}$$", 
        "options": ["$$\\frac{\\pi^2}{3}$$", "$$\\frac{\\pi^2}{6}$$", "$$\\frac{\\pi^2}{12}$$", "$$\\pi$$", "$$2\\pi$$"], 
        "correctAnswer": 1, 
        "difficulty": 3, 
        "concept": 20, 
        "hasImage": false, 
        "imageUrl": "" 
    },
    { 
        "id": 6, 
        "text": "함수 $f(x) = x^3 - 3x + 1$의 극값을 구하시오.", 
        "options": ["$$1, -1$$", "$$2, -2$$", "$$3, -3$$", "$$0, 0$$", "$$1, -2$$"], 
        "correctAnswer": 0, 
        "difficulty": 3, 
        "concept": 7, 
        "hasImage": false, 
        "imageUrl": "" 
    },
    { 
        "id": 7, 
        "text": "다음 미분방정식을 풀어라: $$\\frac{dy}{dx} = 2x$$", 
        "options": ["$$y = x^2 + C$$", "$$y = 2x + C$$", "$$y = x^2 - C$$", "$$y = 2x^2 + C$$", "$$y = \\frac{1}{2}x^2 + C$$"], 
        "correctAnswer": 0, 
        "difficulty": 3, 
        "concept": 18, 
        "hasImage": false, 
        "imageUrl": "" 
    },
    { 
        "id": 8, 
        "text": "함수 $f(x) = \\sin x$의 2차 테일러 다항식을 구하시오.", 
        "options": ["$$x$$", "$$x - \\frac{x^2}{2}$$", "$$x - \\frac{x^3}{6}$$", "$$1 - \\frac{x^2}{2}$$", "$$x + \\frac{x^3}{6}$$"], 
        "correctAnswer": 2, 
        "difficulty": 3, 
        "concept": 25, 
        "hasImage": false, 
        "imageUrl": "" 
    },
    { 
        "id": 9, 
        "text": "다음 적분을 계산하시오: $$\\int \\frac{dx}{1+x^2}$$", 
        "options": ["$$\\tan^{-1}x + C$$", "$$\\sin^{-1}x + C$$", "$$\\ln|x| + C$$", "$$\\frac{1}{x} + C$$", "$$x + C$$"], 
        "correctAnswer": 0, 
        "difficulty": 3, 
        "concept": 14, 
        "hasImage": false, 
        "imageUrl": "" 
    },
    { 
        "id": 10, 
        "text": "함수 $f(x,y) = x^2 + y^2$의 $$(1,1)$$에서의 그래디언트를 구하시오.", 
        "options": ["$$(1,1)$$", "$$(2,2)$$", "$$(0,0)$$", "$$(1,2)$$", "$$(2,1)$$"], 
        "correctAnswer": 1, 
        "difficulty": 3, 
        "concept": 30, 
        "hasImage": false, 
        "imageUrl": "" 
    },
    { 
        "id": 11, 
        "text": "다음 행렬의 행렬식을 구하시오: $$\\begin{pmatrix} 1 & 2 \\\\ 3 & 4 \\end{pmatrix}$$", 
        "options": ["$$-2$$", "$$0$$", "$$2$$", "$$4$$", "$$6$$"], 
        "correctAnswer": 0, 
        "difficulty": 2, 
        "concept": 10, 
        "hasImage": false, 
        "imageUrl": "" 
    },
    { 
        "id": 12, 
        "text": "함수 $f(x) = \\ln(x)$의 $$x = 1$$에서의 미분 계수를 구하시오.", 
        "options": ["$$0$$", "$$1$$", "$$2$$", "$$\\ln(1)$$", "$$e$$"], 
        "correctAnswer": 1, 
        "difficulty": 1, 
        "concept": 5, 
        "hasImage": false, 
        "imageUrl": "" 
    },
    { 
        "id": 13, 
        "text": "다음 극한값을 구하시오: $$\\lim_{x \\to \\infty} \\frac{1}{x}$$", 
        "options": ["$$0$$", "$$1$$", "$$\\infty$$", "$$-1$$", "$$\\frac{1}{2}$$"], 
        "correctAnswer": 0, 
        "difficulty": 1, 
        "concept": 8, 
        "hasImage": false, 
        "imageUrl": "" 
    },
    { 
        "id": 14, 
        "text": "다음 급수의 수렴값을 구하시오: $$\\sum_{n=0}^{\\infty} \\frac{1}{n!}$$", 
        "options": ["$$1$$", "$$e$$", "$$\\pi$$", "$$0$$", "$$\\frac{1}{e}$$"], 
        "correctAnswer": 1, 
        "difficulty": 3, 
        "concept": 20, 
        "hasImage": false, 
        "imageUrl": "" 
    },
    { 
        "id": 15, 
        "text": "함수 $f(x) = \\cos(x)$의 3차 테일러 다항식을 구하시오.", 
        "options": ["$$1 - \\frac{x^2}{2}$$", "$$1 - x$$", "$$x - \\frac{x^3}{6}$$", "$$1 - x + \\frac{x^2}{2}$$", "$$x^2 - \\frac{x^3}{3}$$"], 
        "correctAnswer": 0, 
        "difficulty": 3, 
        "concept": 25, 
        "hasImage": false, 
        "imageUrl": "" 
    },
    { 
        "id": 16, 
        "text": "다음 적분을 계산하시오: $$\\int_0^1 x^2 dx$$", 
        "options": ["$$\\frac{1}{3}$$", "$$\\frac{1}{2}$$", "$$1$$", "$$\\frac{2}{3}$$", "$$\\frac{1}{4}$$"], 
        "correctAnswer": 0, 
        "difficulty": 2, 
        "concept": 12, 
        "hasImage": false, 
        "imageUrl": "" 
    },
    { 
        "id": 17, 
        "text": "함수 $f(x) = \\tan(x)$의 역함수를 구하시오.", 
        "options": ["$$\\tan^{-1}(x)$$", "$$\\sin^{-1}(x)$$", "$$\\frac{1}{x}$$", "$$\\ln(x)$$", "$$\\frac{1}{\\tan(x)}$$"], 
        "correctAnswer": 0, 
        "difficulty": 2, 
        "concept": 15, 
        "hasImage": false, 
        "imageUrl": "" 
    },
    { 
        "id": 18, 
        "text": "다음 미분방정식을 풀어라: $$\\frac{dy}{dx} = 3x^2$$", 
        "options": ["$$y = x^3 + C$$", "$$y = 3x + C$$", "$$y = 3x^3 + C$$", "$$y = x^2 + C$$", "$$y = 3x^2 + C$$"], 
        "correctAnswer": 0, 
        "difficulty": 3, 
        "concept": 18, 
        "hasImage": false, 
        "imageUrl": "" 
    },
    { 
        "id": 19, 
        "text": "다음 적분을 계산하시오: $$\\int \\frac{1}{x} dx$$", 
        "options": ["$$\\ln|x| + C$$", "$$\\frac{1}{x} + C$$", "$$x + C$$", "$$\\tan^{-1}(x) + C$$", "$$e^x + C$$"], 
        "correctAnswer": 0, 
        "difficulty": 2, 
        "concept": 14, 
        "hasImage": false, 
        "imageUrl": "" 
    },
    { 
        "id": 20, 
        "text": "함수 $f(x) = e^x$의 테일러 급수 표현을 구하시오.", 
        "options": ["$$1 + x + \\frac{x^2}{2!} + \\frac{x^3}{3!} + \\dots$$", "$$1 - x + \\frac{x^2}{2!}$$", "$$x + \\frac{x^2}{2!} + \\dots$$", "$$e^x - 1$$", "$$x^2 + \\frac{x^3}{3!}$$"], 
        "correctAnswer": 0, 
        "difficulty": 3, 
        "concept": 25, 
        "hasImage": false, 
        "imageUrl": "" 
    },
    { 
        "id": 21, 
        "text": "다음 삼각형의 넓이를 구하시오.", 
        "options": ["$$10$$", "$$15$$", "$$20$$", "$$25$$", "$$30$$"], 
        "correctAnswer": 2, 
        "difficulty": 2, 
        "concept": 35, 
        "hasImage": true, 
        "imageUrl": "https://aeopp.github.io/assets/img/Triangle1.png" 
    },
    { 
        "id": 22, 
        "text": "다음 그림에서 $x$를 구하시오.", 
        "options": ["$$10$$", "$$11$$", "$$12$$", "$$13$$", "$$14$$"], 
        "correctAnswer": 2, 
        "difficulty": 2, 
        "concept": 36, 
        "hasImage": true, 
        "imageUrl": "https://cdn.teamturing.com/cms/1635175929-5.jpg" 
    },
    { 
        "id": 23, 
        "text": "다음 사각형의 넓이를 구하시오.", 
        "options": ["$$20$$", "$$32$$", "$$\\sqrt{1503}$$", "$$47$$", "$$61$$"], 
        "correctAnswer": 3, 
        "difficulty": 3, 
        "concept": 37, 
        "hasImage": true, 
        "imageUrl": "https://cdn.imweb.me/upload/S20200116a4ee6ee864a51/06ab7374ab9a2.gif" 
    },
    { 
        "id": 24, 
        "text": "다음 이차 방정식의 해를 구하시오: $$x^2 - 5x + 6 = 0$$", 
        "options": ["$$x = 2$$", "$$x = 3$$", "$$x = 2, 3$$", "$$x = -2, -3$$", "$$x = 1, 6$$"], 
        "correctAnswer": 2, 
        "difficulty": 2, 
        "concept": 4, 
        "hasImage": false, 
        "imageUrl": "" 
    },
    { 
        "id": 25, 
        "text": "다음 함수의 그래프가 y축에 대칭인 함수는 무엇인가?", 
        "options": ["$$f(x) = x^3$$", "$$f(x) = x^2$$", "$$f(x) = x$$", "$$f(x) = \\sqrt{x}$$", "$$f(x) = |x|$$"], 
        "correctAnswer": 1, 
        "difficulty": 2, 
        "concept": 6, 
        "hasImage": false, 
        "imageUrl": "" 
    },
    { 
        "id": 26, 
        "text": "다음 중 피타고라스의 정리에 해당하지 않는 것은?", 
        "options": [
            "$$a^2 + b^2 = c^2$$", 
            "$$3^2 + 4^2 = 5^2$$", 
            "$$5^2 + 12^2 = 13^2$$", 
            "$$6^2 + 8^2 = 14^2$$", 
            "$$7^2 + 24^2 = 25^2$$"
        ], 
        "correctAnswer": 3, 
        "difficulty": 3, 
        "concept": 9, 
        "hasImage": false, 
        "imageUrl": "" 
    },
    { 
        "id": 27, 
        "text": "다음 등식이 참이 되려면 k의 값은 얼마인가? $$2k + 3 = 11$$", 
        "options": ["$$k = 2$$", "$$k = 3$$", "$$k = 4$$", "$$k = 5$$", "$$k = 6$$"], 
        "correctAnswer": 2, 
        "difficulty": 1, 
        "concept": 3, 
        "hasImage": false, 
        "imageUrl": "" 
    },
    { 
        "id": 28, 
        "text": "삼각함수 $$\\sin(90^\\circ)$$의 값은 얼마인가?", 
        "options": ["$$0$$", "$$1$$", "$$\\frac{1}{2}$$", "$$\\frac{\\sqrt{2}}{2}$$", "$$\\frac{\\sqrt{3}}{2}$$"], 
        "correctAnswer": 1, 
        "difficulty": 1, 
        "concept": 7, 
        "hasImage": false, 
        "imageUrl": "" 
    },
    { 
        "id": 29, 
        "text": "다음 중 일차함수의 그래프가 x축과 교차하는 점을 구하시오: $$f(x) = 2x - 4$$", 
        "options": ["$$(0, -4)$$", "$$(2, 0)$$", "$$(4, 0)$$", "$$(0, 2)$$", "$$(1, -2)$$"], 
        "correctAnswer": 1, 
        "difficulty": 2, 
        "concept": 6, 
        "hasImage": false, 
        "imageUrl": "" 
    },
    { 
        "id": 30, 
        "text": "다음 수열의 일반항을 구하시오: $$2, 5, 8, 11, \\dots$$", 
        "options": [
            "$$a_n = 2n$$", 
            "$$a_n = 3n - 1$$", 
            "$$a_n = 2 + 3(n-1)$$", 
            "$$a_n = 5 + 3n$$", 
            "$$a_n = n^2 + 1$$"
        ], 
        "correctAnswer": 2, 
        "difficulty": 2, 
        "concept": 11, 
        "hasImage": false, 
        "imageUrl": "" 
    },
    { 
        "id": 31, 
        "text": "다음 방정식의 해를 구하시오: $$3x - 7 = 2x + 5$$", 
        "options": ["$$x = -12$$", "$$x = 12$$", "$$x = 2$$", "$$x = -2$$", "$$x = 7$$"], 
        "correctAnswer": 1, 
        "difficulty": 1, 
        "concept": 3, 
        "hasImage": false, 
        "imageUrl": "" 
    },
    { 
        "id": 32, 
        "text": "다음 함수의 증가 구간을 구하시오: $$f(x) = x^2 - 4x + 3$$", 
        "options": [
            "$$x < 2$$", 
            "$$x > 2$$", 
            "$$x < -2$$", 
            "$$x > -2$$", 
            "$$x > 0$$"
        ], 
        "correctAnswer": 1, 
        "difficulty": 3, 
        "concept": 5, 
        "hasImage": false, 
        "imageUrl": "" 
    },
    { 
        "id": 33, 
        "text": "다음 중 소수는 무엇인가?", 
        "options": ["$$4$$", "$$6$$", "$$9$$", "$$11$$", "$$15$$"], 
        "correctAnswer": 3, 
        "difficulty": 1, 
        "concept": 2, 
        "hasImage": false, 
        "imageUrl": "" 
    },
    { 
        "id": 34, 
        "text": "다음 등식이 참이 되도록 하는 $$x$$의 값을 구하시오: $$5x + 2 = 3x + 10$$", 
        "options": ["$$x = 2$$", "$$x = 4$$", "$$x = 6$$", "$$x = 8$$", "$$x = 10$$"], 
        "correctAnswer": 1, 
        "difficulty": 2, 
        "concept": 3, 
        "hasImage": false, 
        "imageUrl": "" 
    },
    { 
        "id": 35, 
        "text": "다음 함수의 극대값을 구하시오: $$f(x) = -x^2 + 4x + 1$$", 
        "options": ["$$f(2) = 5$$", "$$f(1) = 4$$", "$$f(3) = 4$$", "$$f(4) = 1$$", "$$f(0) = 1$$"], 
        "correctAnswer": 0, 
        "difficulty": 3, 
        "concept": 5, 
        "hasImage": false, 
        "imageUrl": "" 
    },
    { 
        "id": 36, 
        "text": "철수는 두 수의 합이 15이고, 차가 5인 두 수를 찾고자 합니다. 이 두 수를 구하시오.", 
        "options": ["$$5, 10$$", "$$6, 9$$", "$$7, 8$$", "$$4, 11$$", "$$3, 12$$"], 
        "correctAnswer": 0, 
        "difficulty": 2, 
        "concept": 3, 
        "hasImage": false, 
        "imageUrl": "" 
    },
    { 
        "id": 37, 
        "text": "한 직사각형의 길이는 너비의 두 배입니다. 이 직사각형의 둘레가 36cm일 때, 길이와 너비를 구하시오.", 
        "options": ["$$길이 = 12cm, 너비 = 6cm$$", "$$길이 = 14cm, 너비 = 7cm$$", "$$길이 = 10cm, 너비 = 5cm$$", "$$길이 = 16cm, 너비 = 8cm$$", "$$길이 = 18cm, 너비 = 9cm$$"], 
        "correctAnswer": 0, 
        "difficulty": 3, 
        "concept": 3, 
        "hasImage": false, 
        "imageUrl": "" 
    },
    { 
        "id": 38, 
        "text": "지훈은 자동차를 구매하려고 합니다. 자동차의 가격은 $2,000,000원이고, 지훈은 10%의 할인을 받았습니다. 지훈이 지불해야 할 금액은 얼마인가요?", 
        "options": ["$$1,800,000원$$", "$$1,900,000원$$", "$$2,000,000원$$", "$$2,100,000원$$", "$$1,700,000원$$"], 
        "correctAnswer": 1, 
        "difficulty": 2, 
        "concept": 4, 
        "hasImage": false, 
        "imageUrl": "" 
    },
    { 
        "id": 39, 
        "text": "한 수업에 학생이 30명 있습니다. 이 중 60%가 수학을 좋아하고, 나머지는 과학을 좋아합니다. 수학을 좋아하는 학생의 수를 구하시오.", 
        "options": ["$$12명$$", "$$15명$$", "$$18명$$", "$$20명$$", "$$10명$$"], 
        "correctAnswer": 2, 
        "difficulty": 2, 
        "concept": 2, 
        "hasImage": false, 
        "imageUrl": "" 
    },
    { 
        "id": 40, 
        "text": "한 삼각형의 두 각이 각각 35도와 65도입니다. 이 삼각형의 나머지 각의 크기를 구하시오.", 
        "options": ["$$80도$$", "$$90도$$", "$$100도$$", "$$110도$$", "$$120도$$"], 
        "correctAnswer": 1, 
        "difficulty": 1, 
        "concept": 9, 
        "hasImage": false, 
        "imageUrl": "" 
    },
    { 
        "id": 41, 
        "text": "수빈은 동전을 5개 던졌습니다. 동전이 앞면이 나올 확률을 계산하시오. (동전은 공정함)", 
        "options": ["$$\\left( \\frac{1}{2} \\right)^5$$", "$$5 \\times \\left( \\frac{1}{2} \\right)^5$$", "$$10 \\times \\left( \\frac{1}{2} \\right)^5$$", "$$ \\left( \\frac{1}{2} \\right)^{10} $$", "$$ \\frac{5}{2} $$"], 
        "correctAnswer": 1, 
        "difficulty": 3, 
        "concept": 19, 
        "hasImage": false, 
        "imageUrl": "" 
    },
    { 
        "id": 42, 
        "text": "한 원의 반지름이 7cm일 때, 이 원의 넓이를 구하시오. (원주율 $$\\pi$$는 $$3.14$$로 계산)", 
        "options": ["$$153.86 cm^2$$", "$$154 cm^2$$", "$$148.26 cm^2$$", "$$147 cm^2$$", "$$150 cm^2$$"], 
        "correctAnswer": 0, 
        "difficulty": 2, 
        "concept": 10, 
        "hasImage": false, 
        "imageUrl": "" 
    },
    { 
        "id": 43, 
        "text": "다음 함수 $$f(x) = 2x + 3$$과 $$g(x) = x^2$$의 교점을 구하시오.", 
        "options": [
            "$$(0,3)$$", "$$(1,5), (-3, -3)$$", "$$(2,7)$$", "$$(1,5)$$", "$$( -1,1 )$$"
        ], 
        "correctAnswer": 3, 
        "difficulty": 3, 
        "concept": 6, 
        "hasImage": false, 
        "imageUrl": "" 
    },
    { 
        "id": 44, 
        "text": "영희는 15000원을 가지고 있습니다. 매주 동일한 금액을 저축할 때, 6주 후에 총 저축액이 21000원이 되도록 하려면 영희는 매주 얼마를 저축해야 하나요?", 
        "options": ["$$500원$$", "$$750원$$", "$$1000원$$", "$$1250원$$", "$$1500원$$"], 
        "correctAnswer": 0, 
        "difficulty": 3, 
        "concept": 5, 
        "hasImage": false, 
        "imageUrl": "" 
    },
    { 
        "id": 45, 
        "text": "한 직선의 기울기가 3이고, y절편이 -2인 직선의 방정식을 구하시오.", 
        "options": [
            "$$y = 3x - 2$$", "$$y = -3x + 2$$", "$$y = 3x + 2$$", "$$y = -3x - 2$$", "$$y = 2x - 3$$"
        ], 
        "correctAnswer": 0, 
        "difficulty": 2, 
        "concept": 6, 
        "hasImage": false, 
        "imageUrl": "" 
    },
    { 
        "id": 46, 
        "text": "다음 적분을 계산하시오: $$\\int_{0}^{1} x e^{x} dx$$", 
        "options": ["$$0$$", "$$1$$", "$$e$$", "$$e - 1$$", "$$2$$"], 
        "correctAnswer": 1, 
        "difficulty": 4, 
        "concept": 14, 
        "hasImage": false, 
        "imageUrl": "" 
    },
    { 
        "id": 47, 
        "text": "다음 연립방정식을 풀어 $$x$$과 $$y$$의 값을 구하시오: \n$$\\begin{cases} 2x + 3y = 13 \\\\ 4x - y = 5 \\end{cases}$$", 
        "options": ["$$x=2, y=3$$", "$$x=3, y=2$$", "$$x=4, y=1$$", "$$x=1, y=4$$", "$$x=5, y=1$$"], 
        "correctAnswer": 1, 
        "difficulty": 4, 
        "concept": 3, 
        "hasImage": false, 
        "imageUrl": "" 
    },
    { 
        "id": 48, 
        "text": "함수 $$f(x) = \\ln(x) \\cdot e^{x}$$의 도함수 $$f'(x)$$을 구하시오.", 
        "options": [
            "$$e^x \\left( \\frac{1}{x} + \\ln x \\right)$$", 
            "$$e^x \\left( \\frac{1}{x} - \\ln x \\right)$$", 
            "$$e^x \\left( \\ln x - \\frac{1}{x} \\right)$$", 
            "$$e^x (\\ln x + x)$$", 
            "$$e^x (x + 1)$$"
        ], 
        "correctAnswer": 0, 
        "difficulty": 4, 
        "concept": 5, 
        "hasImage": false, 
        "imageUrl": "" 
    },
    { 
        "id": 49, 
        "text": "점 $$A(2, 3)$$과 점 $$B(5, 7)$$을 지나는 직선의 기울기를 구하시오.", 
        "options": ["$$\\frac{4}{3}$$", "$$\\frac{5}{3}$$", "$$\\frac{7}{5}$$", "$$\\frac{3}{4}$$", "$$1$$"], 
        "correctAnswer": 0, 
        "difficulty": 3, 
        "concept": 6, 
        "hasImage": false, 
        "imageUrl": "" 
    },
    { 
        "id": 50, 
        "text": "어떤 주사위를 두 번 던졌을 때, 합이 7이 되는 확률을 구하시오.", 
        "options": ["$$\\frac{1}{12}$$", "$$\\frac{1}{6}$$", "$$\\frac{1}{4}$$", "$$\\frac{5}{36}$$", "$$\\frac{1}{8}$$"], 
        "correctAnswer": 1, 
        "difficulty": 3, 
        "concept": 19, 
        "hasImage": false, 
        "imageUrl": "" 
    },
    { 
        "id": 51, 
        "text": "$$\\log_{2}(8) + \\ln(e^3)$$의 값을 구하시오.", 
        "options": ["$$3$$", "$$5$$", "$$6$$", "$$9$$", "$$12$$"], 
        "correctAnswer": 2, 
        "difficulty": 4, 
        "concept": 15, 
        "hasImage": false, 
        "imageUrl": "" 
    },
    { 
        "id": 52, 
        "text": "복소수 $$z$$가 $$z^2 + 1 = 0$$을 만족할 때, $$z$$의 값을 구하시오.", 
        "options": ["$$z = 1$$", "$$z = -1$$", "$$z = i$$", "$$z = -i$$", "$$z = i, -i$$"], 
        "correctAnswer": 4, 
        "difficulty": 3, 
        "concept": 21, 
        "hasImage": false, 
        "imageUrl": "" 
    },
    { 
        "id": 53, 
        "text": "$$\\lim_{x \\to 0} \\frac{\\sin(3x)}{x}$$의 값을 구하시오.", 
        "options": ["$$0$$", "$$1$$", "$$3$$", "$$-3$$", "$$\\infty$$"], 
        "correctAnswer": 2, 
        "difficulty": 3, 
        "concept": 8, 
        "hasImage": false, 
        "imageUrl": "" 
    },
    { 
        "id": 54, 
        "text": "다음 급수 $$\\sum_{n=1}^{\\infty} \\frac{1}{n(n+1)}$$의 합을 구하시오.", 
        "options": ["$$0$$", "$$1$$", "$$\\infty$$", "$$\\frac{1}{2}$$", "$$2$$"], 
        "correctAnswer": 1, 
        "difficulty": 3, 
        "concept": 20, 
        "hasImage": false, 
        "imageUrl": "" 
    },
    { 
        "id": 55, 
        "text": "함수 $$x^2 + y^2 = 25$$에서, $$\\frac{dy}{dx}$$의 값을 구하시오.", 
        "options": ["$$-\\frac{y}{x}$$", "$$-\\frac{x}{y}$$", "$$\\frac{y}{x}$$", "$$\\frac{x}{y}$$", "$$0$$"], 
        "correctAnswer": 1, 
        "difficulty": 4, 
        "concept": 5, 
        "hasImage": false, 
        "imageUrl": "" 
    },
    { 
        "id": 56, 
        "text": "수열 $$\\{a_n\\}$$이 첫째항이 $$a_1 = 2$$이고, 모든 $$n \\geq 1$$에 대해 $$a_{n+1} = 3a_n + 1$$을 만족한다. 이 수열의 일반항 $$a_n$$을 구하시오.", 
        "options": [
            "$$a_n = 3^{n} + 1$$", 
            "$$a_n = 3^{n} - 1$$", 
            "$$a_n = \\frac{3^{n+1} - 1}{2}$$", 
            "$$a_n = 2 \\cdot 3^{n} - 1$$", 
            "$$a_n = 3^{n} + n$$"
        ], 
        "correctAnswer": 3, 
        "difficulty": 5, 
        "concept": 11, 
        "hasImage": false, 
        "imageUrl": "" 
    },
    { 
        "id": 57, 
        "text": "실수 $$x > 0$$에 대하여, $$\\ln(x) + \\ln(2x - 1) = 0$$일 때, $$x$$의 값을 구하시오.", 
        "options": [
            "$$x = 1$$", 
            "$$x = \\frac{1}{2}$$", 
            "$$x = 2$$", 
            "$$x = \\frac{3}{2}$$", 
            "$$x = 0$$"
        ], 
        "correctAnswer": 0, 
        "difficulty": 5, 
        "concept": 15, 
        "hasImage": false, 
        "imageUrl": "" 
    },
    { 
        "id": 58, 
        "text": "함수 $$f(x) = \\frac{1}{x}$$의 그래프와 직선 $$y = mx$$이 첫사분면에서 접할 때, $$m$$의 값을 구하시오.", 
        "options": [
            "$$m = -1$$", 
            "$$m = 0$$", 
            "$$m = 1$$", 
            "$$m = \\frac{1}{2}$$", 
            "$$m = \\frac{1}{e}$$"
        ], 
        "correctAnswer": 2, 
        "difficulty": 5, 
        "concept": 6, 
        "hasImage": false, 
        "imageUrl": "" 
    },
    { 
        "id": 59, 
        "text": "두 사건 $$A$$와 $$B$$가 독립이며, $$P(A) = 0.6$$, $$P(B) = 0.5$$일 때, $$A$$ 또는 $$B$$가 일어날 확률 $$P(A \\cup B)$$를 구하시오.", 
        "options": [
            "$$0.8$$", 
            "$$0.9$$", 
            "$$0.7$$", 
            "$$0.6$$", 
            "$$1$$"
        ], 
        "correctAnswer": 0, 
        "difficulty": 5, 
        "concept": 19, 
        "hasImage": false, 
        "imageUrl": "" 
    },
    { 
        "id": 60, 
        "text": "함수 $$f(x) = e^{2x}$$의 역함수 $$f^{-1}(x)$$의 도함수 $$\\left(f^{-1}\\right)'(x)$$를 $$x = e^{2}$$에서의 값을 구하시오.", 
        "options": [
            "$$\\frac{1}{2}$$", 
            "$$\\frac{1}{2e^{2}}$$", 
            "$$\\frac{1}{e^{2}}$$", 
            "$$2$$", 
            "$$e^{2}$$"
        ], 
        "correctAnswer": 1, 
        "difficulty": 5, 
        "concept": 15, 
        "hasImage": false, 
        "imageUrl": "" 
    },
    { 
        "id": 61, 
        "text": "다음 부등식을 만족하는 모든 자연수 $$n$$의 합을 구하시오: $$n^2 - 5n + 6 < 0$$", 
        "options": [
            "$$5$$", 
            "$$7$$", 
            "$$11$$", 
            "$$6$$", 
            "$$9$$"
        ], 
        "correctAnswer": 3, 
        "difficulty": 5, 
        "concept": 13, 
        "hasImage": false, 
        "imageUrl": "" 
    },
    { 
        "id": 62, 
        "text": "미분 가능하고 증가 함수인 $$f(x)$$에 대하여, $$f(1) = 2$$, $$f'(1) = 3$$일 때, $$f^{-1}(2.3)$$의 근사값을 구하시오.", 
        "options": [
            "$$1.1$$", 
            "$$1.2$$", 
            "$$1.3$$", 
            "$$1.4$$", 
            "$$1.5$$"
        ], 
        "correctAnswer": 2, 
        "difficulty": 5, 
        "concept": 5, 
        "hasImage": false, 
        "imageUrl": "" 
    },
    { 
        "id": 63, 
        "text": "두 변수 $$x$$와 $$y$$가 양의 실수이고, $$x + y = 10$$일 때, $$xy$$의 최대값을 구하시오.", 
        "options": [
            "$$25$$", 
            "$$24$$", 
            "$$26$$", 
            "$$20$$", 
            "$$30$$"
        ], 
        "correctAnswer": 0, 
        "difficulty": 5, 
        "concept": 13, 
        "hasImage": false, 
        "imageUrl": "" 
    },
    { 
        "id": 64, 
        "text": "다음 급수의 수렴 여부를 판단하고, 수렴한다면 그 합을 구하시오: $$\\sum_{n=1}^{\\infty} \\frac{(-1)^{n+1}}{n}$$", 
        "options": [
            "$$\\ln 2$$", 
            "$$1$$", 
            "$$\\ln 2$$에 수렴하지 않음", 
            "$$0$$", 
            "$$\\frac{1}{2}$$"
        ], 
        "correctAnswer": 0, 
        "difficulty": 5, 
        "concept": 20, 
        "hasImage": false, 
        "imageUrl": "" 
    },
    { 
        "id": 65, 
        "text": "다음 적분을 계산하시오: $$\\int_{0}^{\\frac{\\pi}{2}} \\ln(\\sin x) dx$$", 
        "options": [
            "$$0$$", 
            "$$-\\frac{\\pi}{2} \\ln 2$$", 
            "$$\\frac{\\pi}{2} \\ln 2$$", 
            "$$-\\pi \\ln 2$$", 
            "$$\\pi \\ln 2$$"
        ], 
        "correctAnswer": 1, 
        "difficulty": 5, 
        "concept": 14, 
        "hasImage": false, 
        "imageUrl": "" 
    }
];