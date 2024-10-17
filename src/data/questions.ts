import { Question } from '../types/question';

export const questions: Question[] = [
    {
        "id": 1,
        "text": "다음을 계산하시오.\n\n$$\sqrt{(-2)^2}+\sqrt[3]{(-3)^3}+\sqrt[4]{(-4)^4}+\cdots+\sqrt[10]{(-10)^{10}}$$",
        "options": ["$$ 6 $$", "$$ -6 $$", "$$ 54 $$", "$$ 5 $$", "$$ 4 $$"],
        "correctAnswer": 1,
        "difficulty": 1,
        "concept": 1,
        "hasImage": false,
        "imageUrl": ""
    },
    {
        "id": 2,
        "text": "$N=\left(\frac{1}{2}\right)^{-4}+\left(\frac{1}{3}\right)^{-3}+\left(\frac{1}{5}\right)^{-2}$ 일 때, 자연수 $N$ 의 양의 약수의 개수를 구하시오.",
        "options": ["$$ 6 $$", "$$ 4 $$", "$$ 8 $$", "$$ 7 $$", "$$ 10 $$"],
        "correctAnswer": 1,
        "difficulty": 1,
        "concept": 3,
        "hasImage": false,
        "imageUrl": ""
    },
    {
        "id": 3,
        "text": "$\sqrt[3]{a}=3, \sqrt[4]{b}=5$ 일 때, $\sqrt[6]{a b}=3^p \times 5^q$ 이다. 이를 만족시키는 유리수 $p, q$ 에 대하여 $p q$ 의 값을 구하시오. (단, $a>0, b>0$ )",
        "options": ["$$\frac{1}{3}$$", "$$\frac{2}{5}$$", "$$\frac{3}{4}$$", "$$\frac{1}{4}$$", "$$\frac{5}{6}$$"],
        "correctAnswer": 1,
        "difficulty": 1,
        "concept": 2,
        "hasImage": false,
        "imageUrl": ""
    },
    {
        "id": 4,
        "text": "실수 $x, y$ 에 대하여 $5^x=2^y=10$ 일 때, $\frac{1}{x}+\frac{1}{y}$ 의 값은?",
        "options": ["$$ 1 $$", "$$ 2 $$", "$$ 0 $$", "$$ -1 $$", "$$ -2 $$"],
        "correctAnswer": 1,
        "difficulty": 1,
        "concept": 3,
        "hasImage": false,
        "imageUrl": ""
    },
    {
        "id": 5,
        "text": "소리의 진동수는 반음 1 개만큼 높아질 때마다 일정한 비율로 증가한다. 다음을 이용하여\n‘도'음보다 반음 4 개만큼 높은 ‘미음의 진동수는 '도’음의 진동수의 몇 배인지 구하시오.\n- 한 옥타브는 12 개의 반음으로 이루어져 있다.\n- 음이 한 옥타브 올라가면 진동수는 2 배가 된다.",
        "options": ["$$ \sqrt[]{2}$$", "$$ \sqrt[4]{2}$$", "$$ \sqrt[]{3}$$", "$$ \sqrt[2]{2}$$", "$$ \sqrt[5]{2}$$"],
        "correctAnswer": 1,
        "difficulty": 1,
        "concept": 3,
        "hasImage": false,
        "imageUrl": ""
    },
    {
        "id": 6,
        "text": "실수 전체의 집합의 부분집합 $A, B, C$ 를 $$ \begin{aligned}& A=\{-3,-2,2,3\}, \& B=\{|a| \mid a \in A\}, \& C=\{x \mid x=\sqrt[b]{a}, a \in A, \quad b \in B\}\end{aligned}$$\n\n\n라 할 때, 집합 $C$ 의 원소의 개수를 구하시오.",
        "options": ["$$ 6 $$", "$$ 5 $$", "$$ 3 $$", "$$ 4 $$", "$$ 7 $$"],
        "correctAnswer": 1,
        "difficulty": 2,
        "concept": 1,
        "hasImage": false,
        "imageUrl": ""
    },
    {
        "id": 7,
        "text": "오른쪽 그림과 같은 정육면체의 부피가 $\sqrt{3}$ 일 때, 삼각형 AFC의 넓이는 $\frac{\sqrt{3^m}}{2}$ 이다. 이때 서로소인 두 자연수 $m, n$ 에 대하여 $m+n$ 의 값 을 구하시오. (단, $n \geq 2$ )",
        "options": ["$$ 11 $$", "$$ 13 $$", "$$ 3 $$", "$$ 8 $$", "$$ 7 $$"],
        "correctAnswer": 1,
        "difficulty": 2,
        "concept": 2,
        "hasImage": true,
        "imageUrl": "https://i.ibb.co/1TK1Kds/image.png"
    },
    {
        "id": 8,
        "text": "$\frac{1}{2^{-4}+1}+\frac{1}{2^{-2}+1}+\frac{1}{2^2+1}+\frac{1}{2^4+1}$ 을 간단히 하시오.",
        "options": ["$$ 2 $$", "$$ 3 $$", "$$ 5 $$", "$$ 7 $$", "$$\frac{1}{2}$$"],
        "correctAnswer": 1,
        "difficulty": 2,
        "concept": 3,
        "hasImage": false,
        "imageUrl": ""
    },
    {
        "id": 9,
        "text": "다음 조건을 모두 만족시키는 1 이 아닌 세 양수 $a, b, c$ 에 대하여 $a c=b^k$ 이다. 이때 실수 $k$ 의 값을 구하시오.\n(가) $a^2$ 은 $b$ 의 세제곱근이다.\n(나) $b^3$ 은 $c$ 의 제곱근이다.",
        "options": ["$$\frac{37}{6}$$", "$$\frac{31}{6}$$", "$$\frac{25}{6}$$", "$$ 6 $$", "$$ 5 $$"],
        "correctAnswer": 1,
        "difficulty": 2,
        "concept": 2,
        "hasImage": false,
        "imageUrl": ""
    },
    {
        "id": 10,
        "text": "어떤 문서를 $r \%$ 로 확대 복사한 후 복사본을 다시 $r \%$ 로 확대 복사하는 작업을 반복하였다. 6번째 복사본의 글자 크기가 원본의 2배일 때, 8번째 복사본의 글자 크기는 6번째 복사본 의 $2^{\frac{q}{p}}$ 배이다. 이때 $p+q$ 의 값을 구하시오. (단, $p, q$ 는 서로소인 자연수이다.)",
        "options": ["$$ 4 $$", "$$ 5 $$", "$$ 2 $$", "$$ 6 $$", "$$ 8 $$"],
        "correctAnswer": 1,
        "difficulty": 2,
        "concept": 3,
        "hasImage": false,
        "imageUrl": ""
    },
    {
        "id": 11,
        "text": "실수 $x$ 와 자연수 $n$ 에 대하여 $x$ 의 $n$ 제곱근 중에서 실수인 것의 개수를 $R(x, n)$ )이라 하자.\n\n이때\n\n$$R(10,10)+R(\sqrt{10}, 5)+R(-\sqrt{10}, 5)+R(-10,10)$$\n\n\n의 값을 구하시오.",
        "options": ["$$ 4 $$", "$$ 5 $$", "$$ 6 $$", "$$ 2 $$", "$$ 3 $$"],
        "correctAnswer": 1,
        "difficulty": 3,
        "concept": 1,
        "hasImage": false,
        "imageUrl": ""
    },
    {
        "id": 12,
        "text": "$2 \leq n \leq 100$ 인 자연수 $n$ 에 대하여 $\left(\sqrt[3]{5^{10}}\right)^{\frac{1}{3}}$ 이 어떤 자연수의 $n$ 제곱근이 되도록 하는 $n$ 의 개수는? ",
        "options": ["$$ 11 $$", "$$ 12 $$", "$$ 10 $$", "$$ 33 $$", "$$ 15 $$"],
        "correctAnswer": 1,
        "difficulty": 3,
        "concept": 2,
        "hasImage": false,
        "imageUrl": ""
    },
    {
        "id": 13,
        "text": "$a>0$ 이고 $\sqrt{a}-\frac{1}{\sqrt{a}}=2$ 일 때, $\frac{a^3+a^2}{a+1}-\frac{a^{-3}+a^{-2}}{a^{-1}+1}$ 의 값은?",
        "options": ["$$24\sqrt[]{2}$$",
            "$$18\sqrt[2]{2}$$",
            "$$12\sqrt[2]{2}$$",
            "$$15\sqrt[2]{2}$$",
            "$$30\sqrt[2]{2}$$"
        ],
        "correctAnswer": 1,
        "difficulty": 3,
        "concept": 3,
        "hasImage": false,
        "imageUrl": ""
    },
    {
        "id": 14,
        "text": "$2^x=3^{-y}, 9^y=6^z$ 일 때, $\frac{1}{x}-\frac{1}{y}$ 을 $z$ 를 이용하여 나타내면? (단, $x y z \neq 0$ )",
        "options": ["$$-\frac{2}{z}$$", "$$-\frac{1}{z}$$", "$$\frac{1}{z}$$", "$$ z $$", "$$ 2z $$"],
        "correctAnswer": 1,
        "difficulty": 3,
        "concept": 3,
        "hasImage": false,
        "imageUrl": ""
    },
    {
        "id": 15,
        "text": "$\left(\frac{n}{2}\right)^{\frac{1}{2}},\left(\frac{n}{3}\right)^{\frac{1}{3}}$ 이 모두 자연수가 되도록 하는 자연수 $n$ 의 최솟값을 구하시오.",
        "options": ["$$ 648 $$", "$$ 1296 $$", "$$ 324 $$", "$$ 1944 $$", "$$ 970 $$"],
        "correctAnswer": 1,
        "difficulty": 3,
        "concept": 3,
        "hasImage": false,
        "imageUrl": ""
    },
    {
        "id": 16,
        "text": "오른쪽 그림과 같이 선분 AB 를 지름으로 하는 원 위의 두 점 $\mathrm{P}, \mathrm{Q}$ 에 대하여 두 선분 $\mathrm{AB}, \mathrm{PQ}$ 의 교점을 R 라 하자. $\overline{\mathrm{AP}}=\overline{\mathrm{BP}}$ 이 고, $\overline{\mathrm{AR}}=4 \sqrt[3]{3}, \overline{\mathrm{BR}}=3 \sqrt[3]{3}$ 일 때, $\frac{5}{7} \overline{\mathrm{BQ}}$ 의 값은?",
        "options": ["$$\sqrt[]{81}$$",
            "$$24\sqrt[3]{27}$$", "$$24\sqrt[]{27}$$",
            "$$24\sqrt[3]{3}$$", "$$24\sqrt[]{3}$$"
        ],
        "correctAnswer": 1,
        "difficulty": 4,
        "concept": 2,
        "hasImage": true,
        "imageUrl": "https://i.ibb.co/JK1TWtX/image.png"
    },
    {
        "id": 17,
        "text": "$\begin{aligned} & \text a b c \neq 0 \text { 인 세 실수 } a, b, c \text { 에 대하여 } \ & \qquad 2^a=3^b=6^c,(a-4)(b-4)=16 \ & \text { 일 때, } c \text { 의 값을 구하시오. I }\end{aligned}$",
        "options": ["$$ 4 $$", "$$ 1 $$", "$$ 6 $$", "$$ 2 $$", "$$ 3 $$"],
        "correctAnswer": 1,
        "difficulty": 4,
        "concept": 3,
        "hasImage": false,
        "imageUrl": ""
    },
    {
        "id": 18,
        "text": "$a>b>0$ 인 $a, b$ 에 대하여 $a^{\frac{2}{3}}+b^{\frac{2}{3}}=2$ 이고 $x=a+3 a^{\frac{1}{3}} b^{\frac{2}{3}}, y=b+3 a^{\frac{2}{3}} b^{\frac{1}{3}}$ 일 때, $(x+y)^{\frac{2}{3}}+(x-y)^{\frac{2}{3}}$ 의 값을 구하시오.",
        "options": ["$$ 4 $$", "$$ 6 $$", "$$ 3 $$", "$$ 8 $$", "$$ 2 $$"],
        "correctAnswer": 1,
        "difficulty": 4,
        "concept": 3,
        "hasImage": false,
        "imageUrl": ""
    },
    {
        "id": 19,
        "text": "부피가 각각 $\sqrt[3]{2^{14}}, \sqrt[3]{2^{17}}$ 인 두 금덩이를 녹여서 한 모서리의 길이가 $\sqrt[8]{2^8}$ 인 정육면체 모양의 금덩이를 최대 $n$ 개 만들 수 있을 때, $n$ 의 값을 구하시오.",
        "options": ["$$ 12 $$", "$$ 20 $$", "$$ 6 $$", "$$ 8 $$", "$$ 9 $$"],
        "correctAnswer": 1,
        "difficulty": 4,
        "concept": 2,
        "hasImage": false,
        "imageUrl": ""
    },
    {
        "id": 20,
        "text": "실수 $x$ 와 2 이상의 자연수 $n$ 에 대하여 $x$ 의 $n$ 제곱근 중에서 실수인 것의 개수를 $f_n(x)$ 라 할 때,\n\n$$f_3\left(\sqrt[5]{(-1)^5}\right)+f_4\left(\sqrt[3]{-\frac{27}{8}}\right)+f_5\left(\left(-\frac{1}{3}\right)^4\right)$$\n\n\n의 값을 구하시오.",
        "options": ["$$ 2 $$", "$$ 3 $$", "$$ 4 $$", "$$ 5 $$", "$$ 1 $$"],
        "correctAnswer": 1,
        "difficulty": 4,
        "concept": 1,
        "hasImage": false,
        "imageUrl": ""
    },
    {
        "id": 21,
        "text": "이차방정식 $x^2-6 x+2=0$ 의 두 근을 $\alpha$, $\beta$ 라 할 때,\n$$\log_3(\alpha+1)+\log_3(\beta+1)$$\n의 값을 구하시오.",
        "options": ["$$ 2 $$", "$$ 3 $$", "$$ 4 $$", "$$ 1 $$", "$$ 0 $$"],
        "correctAnswer": 1,
        "difficulty": 1,
        "concept": 2,
        "hasImage": false,
        "imageUrl": ""
    },
    {
        "id": 22,
        "text": "$\log_3 20$ 의 정수 부분을 $a$, 소수 부분을 $b$ 라 할 때, $9 \left(2^a+3^b \right)$ 의 값은?",
        "options": ["$$ 56 $$", "$$ 29 $$", "$$ 38 $$", "$$ 47 $$", "$$ 65 $$"],
        "correctAnswer": 1,
        "difficulty": 1,
        "concept": 2,
        "hasImage": false,
        "imageUrl": ""
    },
    {
        "id": 23,
        "text": "1 이 아닌 양수 $x$ 에 대하여\n\n$$\frac{1}{\log _2 x}+\frac{1}{\log _3 x}+\frac{1}{\log _4 x}=\log _x k$$\n\n\n를 만족시키는 $k$ 의 값을 구하시오.",
        "options": ["$$ 24 $$", "$$ 12 $$", "$$ 9 $$", "$$ 8 $$", "$$ 16 $$"],
        "correctAnswer": 1,
        "difficulty": 1,
        "concept": 3,
        "hasImage": false,
        "imageUrl": ""
    },
    {
        "id": 24,
        "text": "양수 $x, y, z$ 가 $\log _{12} x+\log _{12} 2 y+\log _{12} 3 z=1$ 을 만족시킬 때, $x y z$ 의 값을 구하시오.",
        "options": ["$$ 2 $$", "$$ 3 $$", "$$ 1 $$", "$$\frac{1}{2}$$", "$$\frac{1}{3}$$"],
        "correctAnswer": 1,
        "difficulty": 1,
        "concept": 2,
        "hasImage": false,
        "imageUrl": ""
    },
    {
        "id": 25,
        "text": "전체집합 $U=\{x \mid x \text{는 } 100 \text{ 이하의 자연수}\}$의 두 부분집합 $A$, $B$가 $$\begin{aligned}& A=\left\{x \mid \log_2 x \text{가 자연수인 } x \in U\right\}, \& B=\left\{x \mid \log_3 x \text{가 자연수인 } x \in U\right\}\end{aligned}$$일 때, 집합 $A \cup B$의 원소의 개수는??",
        "options": ["$$ 10 $$", "$$ 6 $$", "$$ 8 $$", "$$ 5 $$", "$$ 11 $$"],
        "correctAnswer": 1,
        "difficulty": 1,
        "concept": 2,
        "hasImage": false,
        "imageUrl": ""
    },
    {
        "id": 26,
        "text": "오른쪽 그림과 같이 $\overline{\mathrm{AB}}=3, \overline{\mathrm{AC}}=2$ 인 삼각형 ABC 에서 $\angle \mathrm{A}$ 의 이 등분선이 변 BC 와 만나는 점을 D 라 할 때, $\overline{\mathrm{BD}}=\log _3 x^2, \overline{\mathrm{CD}}=\log _3 y$ 이 다. 1 보다 큰 두 양수 $x, y$ 에 대하여 $x=y^k$ 일 때, 상수 $k$ 의 값을 구하시 오.",
        "options": ["$$\frac{3}{4}$$", "$$\frac{1}{2}$$", "$$\frac{3}{5}$$", "$$\frac{2}{3}$$", "$$\frac{5}{4}$$"],
        "correctAnswer": 1,
        "difficulty": 2,
        "concept": 2,
        "hasImage": true,
        "imageUrl": "https://i.ibb.co/ZYwtKj7/image.png"
    },
    {
        "id": 27,
        "text": "$\left(3^{\log _3 4+\log _3 2}\right)^2+\left(2^{\log _3 4+\log _3 2}\right)^{\log _3 3}$ 의 값은?",
        "options": ["$$ 72 $$", "$$ 64 $$", "$$ 68 $$", "$$ 24 $$", "$$ 22 $$"],
        "correctAnswer": 1,
        "difficulty": 2,
        "concept": 3,
        "hasImage": false,
        "imageUrl": ""
    },
    {
        "id": 28,
        "text": "$\log 40=n+\alpha \quad(n$ 은 정수, $0 \leq \alpha<1)$ 일 때, $\frac{10^n+10^\alpha}{10^n-10^\alpha}$ 의 값은?",
        "options": ["$$\frac{7}{3}$$", "$$\frac{7}{2}$$", "$$\frac{11}{6}$$", "$$ 2 $$", "$$ 1 $$"],
        "correctAnswer": 1,
        "difficulty": 2,
        "concept": 2,
        "hasImage": false,
        "imageUrl": ""
    },
    {
        "id": 29,
        "text": "$5^a=3,5^b=8$ 일 때, $\log _6 18$ 을 $a, b$ 에 대한 식으로 나타내면?",
        "options": ["$$\frac{6a+b}{3a+b}$$", "$$\frac{6a-b}{3a+b}$$", "$$\frac{6a+b}{3a-b}$$", "$$\frac{6a-b}{3a-b}$$", "$$\frac{3a+b}{6a+b}$$"],
        "correctAnswer": 1,
        "difficulty": 2,
        "concept": 1,
        "hasImage": false,
        "imageUrl": ""
    },
    {
        "id": 30,
        "text": "이차방정식 $2 x^2-12 x+9=0$ 의 두 근을 $\alpha, \beta$ 라 할 때, $\log _{a^2}+\beta^2 2 \alpha+\log _{a^2+\hat{\beta}^2} \beta$ 의 값을 구하시오.",
        "options": ["$$\frac{2}{3}$$", "$$ 2 $$", "$$\frac{1}{3}$$", "$$ 1 $$", "$$\frac{1}{2}$$"],
        "correctAnswer": 1,
        "difficulty": 2,
        "concept": 2,
        "hasImage": false,
        "imageUrl": ""
    },
    {
        "id": 31,
        "text": "$\log _2 3=a, \log _3 5=b, \log _5 7=c$ 일 때, $\log _{14} 105$ 를 $a, b, c$ 에 대한 식으로 나타내시오.",
        "options": ["$$\frac{a + ab + ac}{1 + abc}$$", "$$\frac{a + ab - ac}{1 - abc}$$",  "$$\frac{a + ab + ac}{abc + 1}$$", "$$\frac{a + ab + ac}{a + b + c}$$", "$$\frac{a(b + c)}{1 + abc}$$"],
        "correctAnswer": 1,
        "difficulty": 3,
        "concept": 2,
        "hasImage": false,
        "imageUrl": ""
    },
    {
        "id": 32,
        "text": "$\log _{x-3}\left(-x^2+8 x-12\right)$ 의 값이 존재하도록 하는 자연수 $x$ 에 대하여 $\log _2 x$ 의 정수 부분 을 $a$, 소수 부분을 $b$ 라 할 때, $2^{a-b}$ 의 값을 구하시오.",
        "options": ["$$\frac{16}{5}$$", "$$\frac{4}{5}$$", "$$\frac{8}{3}$$", "$$ 2 $$", "$$\frac{12}{5}$$"],
        "correctAnswer": 1,
        "difficulty": 3,
        "concept": 2,
        "hasImage": false,
        "imageUrl": ""
    },
    {
        "id": 33,
        "text": "1 보다 큰 양수 $a, b$ 에 대하여 $\left(\log _a \sqrt{b}\right)^2+\left(\log _b a\right)^2$ 의 최솟값을 구하시오.",
        "options": ["$$ 1 $$", "$$ 2 $$", "$$ 3 $$", "$$ 4 $$", "$$ 5 $$"],
        "correctAnswer": 1,
        "difficulty": 3,
        "concept": 3,
        "hasImage": false,
        "imageUrl": ""
    },
    {
        "id": 34,
        "text": "216 의 모든 양의 약수를 $a_1, a_2, a_3, \cdots, a_{10}$ 이라 할 때,\n\n$$\log _6 a_1+\log _6 a_2+\log _6 a_3+\cdots+\log _6 a_{10}$$\"\n\n\n의 값을 구하시오.",
        "options": ["$$ 24 $$", "$$ 26 $$", "$$ 22 $$", "$$ 20 $$", "$$ 18 $$"],
        "correctAnswer": 1,
        "difficulty": 3,
        "concept": 2,
        "hasImage": false,
        "imageUrl": ""
    },
    {
        "id": 35,
        "text": "빛이 어떤 유리 한 장을 통과할 때마다 그 밝기가 $19 \%$ 씩 감소한다고 한다. 빛이 이 유리 를 5 장 통과하였을 때의 빛의 밝기는 처음 밝기의 몇 \% 인지 구하시오.\n(단, $\log 3=0.48, \log 3.99=0.6$ 으로 계산한다.)",
        "options": ["$$ 39.9 $$", "$$ 3.99 $$", "$$ 8.1 $$", "$$ 31.8 $$", "$$ 48 $$"],
        "correctAnswer": 1,
        "difficulty": 3,
        "concept": 4,
        "hasImage": false,
        "imageUrl": ""
    },
    {
        "id": 36,
        "text": "자연수 $n$ 에 대하여 다음 조건을 모두 만족시키는 두 자연수 $a, b$ 의 순서쌍 $(a, b)$ 의 개수 를 $f(n)$ 이라 하자.\n(가) $\log _2(n-a)^2$ 과 $\log _2(n+b)^2$ 은 같은 자연수이다.\n(나) $a+b \leq 4^n$\n$f(1)+f(2)+f(4)$ 의 값을 구하시오.",
        "options": ["$$ 8 $$", "$$ 5 $$", "$$ 6 $$", "$$ 10 $$", "$$ 7 $$"],
        "correctAnswer": 1,
        "difficulty": 4,
        "concept": 1,
        "hasImage": false,
        "imageUrl": ""
    },
    {
        "id": 37,
        "text": "$\log _5 \sqrt{2}$ 를 소수로 나타내면 $0 . a b c \cdots$ 일 때, $a$ 의 값을 구하시오.\n(단, $a, b, c, \cdots$ 는 0 또는 한 자리 자연수이다.)",
        "options": ["$$ 2 $$", "$$ 4 $$", "$$ 6 $$", "$$ 5 $$", "$$ 8 $$"],
        "correctAnswer": 1,
        "difficulty": 4,
        "concept": 2,
        "hasImage": false,
        "imageUrl": ""
    },
    {
        "id": 38,
        "text": "양수 $x$ 에 대하여\n\n$$\log _3 x=f(x)+g(x) \quad(f(x) \text { 는 정수, } 0 \leq g(x)<1)$$\n\n\n라 할 때,\n\n$$\begin{aligned}& 1 \cdot 3^{q(1)-f(1)}+2 \cdot 3^{q\left(\frac{1}{2}\right)-f\left(\frac{1}{2}\right)}+3 \cdot 3^{q\left(\frac{1}{3}\right)-f\left(\frac{1}{3}\right)} \& +4 \cdot 3^{q\left(\frac{1}{4}\right)-f\left(\frac{1}{4}\right)}+5 \cdot 3^{q\left(\frac{1}{5}\right)-f\left(\frac{1}{5}\right)}\end{aligned}$$\n\n\n의 값을 구하시오.",
        "options": ["$$ 181 $$", "$$ 100 $$", "$$ 262 $$", "$$ 180 $$", "$$ 90 $$"],
        "correctAnswer": 1,
        "difficulty": 4,
        "concept": 2,
        "hasImage": false,
        "imageUrl": ""
    },
    {
        "id": 39,
        "text": "자연수 $k$ 에 대하여 $a_k$ 가 0 또는 1 이고\n\n$$\log _5 2=\frac{a_1}{2}+\frac{a_2}{2^2}+\frac{a_3}{2^3}+\frac{a_4}{2^4}+\cdots$$\n\n\n일 때, $a_1+a_2+a_3$ 의 값을 구하시오.",
        "options": ["$$ 2 $$", "$$ 1 $$", "$$ 0 $$", "$$ 3 $$", "$$ 4 $$"],
        "correctAnswer": 1,
        "difficulty": 4,
        "concept": 2,
        "hasImage": false,
        "imageUrl": ""
    },
    {
        "id": 40,
        "text": "1 보다 큰 서로 다른 두 자연수 $m, n$ 이 다음 조건을 모두 만족시킬 때, $m, n$ 의 순서쌍 $(m, n)$ 의 개수는?\n(가) $m n<200$\n(나) $\log _m n$ 은 유리수이다.",
        "options": ["$$ 24 $$", "$$ 22 $$", "$$ 18 $$", "$$ 20 $$", "$$ 26 $$"],
        "correctAnswer": 1,
        "difficulty": 4,
        "concept": 1,
        "hasImage": false,
        "imageUrl": ""
    },
    {
        "id": 41,
        "text": "함수 $f(x)=2^x$ 에 대하여 $f(p)=q$ 라 할 때, $f\left(\frac{p}{2}\right)+f\left(-\frac{p}{2}\right)$ 의 값은 $q$ 로 나타내면?",
        "options": ["$$\sqrt{q} + \frac{1}{\sqrt{q}}$$", "$$\sqrt{q} - \frac{1}{\sqrt{q}}$$", "$$\frac{1}{\sqrt{q}} - \sqrt{q}$$", "$$\frac{1}{q} + \sqrt{q}$$", "$$q + \frac{1}{q}$$"],
        "correctAnswer": 1,
        "difficulty": 1,
        "concept": 1,
        "hasImage": false,
        "imageUrl": ""
    },
    {
        "id": 42,
        "text": "함수 $f(x)=a^x(a>0, a \neq 1)$ 에 대하여 $f(2)=\frac{1}{9}$ 일 때, $y=f(x)$ 에 대한 설명으로 옳은 것만을 [보기]에서 있는 대로 고른 것은?\n\nㄱ. $f(-4)=16$\nㄴ. 그래프는 점 $(-1,3)$ 을 지난다.\nㄷ. 그래프의 점근선은 $x$ 축이다.\nㄹ. $x$ 의 값이 증가하면 $y$ 의 값도 증가한다.",
        "options": ["$$  $$", "$$  $$", "$$  $$", "$$  $$", "$$  $$", "$$  $$", "$$  $$", "$$  $$", "$$  $$", "$$  $$"],
        "correctAnswer": 1,
        "difficulty": 1,
        "concept": 2,
        "hasImage": false,
        "imageUrl": ""
    },
    {
        "id": 43,
        "text": "함수 $y=4^{2 x}$ 의 그래프를 $x$ 축의 방향으로 $m$ 만큼, $y$ 축의 방향으로 $n$ 만큼 평행이동하였더니 함수 $y=16 \cdot 4^{2 x}+16$ 의 그래프와 겹쳐졌다. 이때 $m+n$ 의 값을 구하시오.",
        "options": ["$$ 15 $$", "$$ -15 $$", "$$ 12 $$", "$$ -12 $$", "$$ 8 $$"],
        "correctAnswer": 1,
        "difficulty": 1,
        "concept": 3,
        "hasImage": false,
        "imageUrl": ""
    },
    {
        "id": 44,
        "text": "정의역이 $\{x \mid-1 \leq x \leq 2\}$ 인 함수 $y=4^x-2^{x+1}+3$ 이 $x=a$ 에서 최댓값 $b, x=c$ 에서 최솟값 $d$ 를 가질 때, $a+b+c-d$ 의 값은?",
        "options": ["$$ 11 $$", "$$ 13 $$", "$$ 15 $$", "$$ 17 $$", "$$ 19 $$"],
        "correctAnswer": 1,
        "difficulty": 1,
        "concept": 4,
        "hasImage": false,
        "imageUrl": ""
    },
    {
        "id": 45,
        "text": "연립방정식 $\left\{\begin{array}{l}2^{x-1} + 3^{y+1} = 11 \\2^{x+2} - 3^{y-1} = 15\end{array}\right.$ 의 해를 $x = \alpha, y = \beta$ 라 할 때, $\alpha \beta$ 의 값은?",
        "options": ["$$ 2 $$", "$$ -3 $$", "$$ -2 $$", "$$ -1 $$", "$$ 1 $$"],
        "correctAnswer": 1,
        "difficulty": 1,
        "concept": 5,
        "hasImage": false,
        "imageUrl": ""
    },
    {
        "id": 46,
        "text": "함수 $y=\left(a^2+a+1\right)^x$ 에서 $x$ 의 값이 증가할 때 $y$ 의 값은 감소하도록 하는 실수 $a$ 의 값의 범위를 구하시오.",
        "options": ["$$-1 < a < 0$$", "$$0 < a < 1$$", "$$a > 1$$", "$$a < -1$$", "$$a = 0$$"],
        "correctAnswer": 1,
        "difficulty": 2,
        "concept": 2,
        "hasImage": false,
        "imageUrl": ""
    },
    {
        "id": 47,
        "text": "300. $0<a<1$ 일 때, 세 수 $a, a^a, a^{a^a}$ 의 대소 관계는?",
        "options": ["$$a < a^{a^{a}} < a^{a}$$", "$$a^{a} < a^{a^{a}} < a$$", "$$a^{a^{a}} < a < a^{a}$$", "$$a^{a} < a < a^{a^{a}}$$", "$$a < a^{a} < a^{a^{a}}$$"],
        "correctAnswer": 1,
        "difficulty": 2,
        "concept": 2,
        "hasImage": false,
        "imageUrl": ""
    },
    {
        "id": 48,
        "text": "어느 호수에서 수면에서의 빛의 밝기가 $I_0 \operatorname{cd}$ (칸델라)일 때, 수심이 $x \mathrm{~m}$ 인 곳에서의 빛의 밝기를 $I_x \mathrm{~cd}$ 라 하면\n\n$$I_x=I_0 \cdot 4^{-0.2 x}$$\n\n\n이 성립한다고 한다. 이 호수의 물속 어느 지점에서의 빛의 밝기가 수면에서의 빛의 밝기의 $\frac{1}{64}$ 이라 할 때, 이 지점의 수심은 몇 m 인가?",
        "options": ["$$ 15 $$", "$$ 10 $$", "$$ 12 $$", "$$ 16 $$", "$$ 18 $$"],
        "correctAnswer": 1,
        "difficulty": 2,
        "concept": 5,
        "hasImage": false,
        "imageUrl": ""
    },
    {
        "id": 49,
        "text": "정의역이 $\{x \mid 0 \leq x \leq 3\}$ 인 함수 $f(x)=a^{x+1}$ 의 최댓값이 최솟값의 8 배가 되도록 하는 모든 양수 $a$ 의 값의 합을 구하시오.",
        "options": ["$$\frac{5}{2}$$", "$$ 2 $$", "$$\frac{9}{4}$$", "$$ 1 $$", "$$\frac{3}{2}$$"],
        "correctAnswer": 1,
        "difficulty": 2,
        "concept": 4,
        "hasImage": false,
        "imageUrl": ""
    },
    {
        "id": 50,
        "text": "함수 $y=2^{-x+1}+k$ 의 그래프가 제 1 사분면을 지나지 않도록 하는 상수 $k$ 의 최댓값은?",
        "options": ["$$ -2 $$", "$$ -1 $$", "$$-\frac{1}{2}$$", "$$ 1 $$", "$$ 2 $$"],
        "correctAnswer": 1,
        "difficulty": 2,
        "concept": 3,
        "hasImage": false,
        "imageUrl": ""
    },
    {
        "id": 51,
        "text": "함수 $y=\left(\frac{1}{2}\right)^{|x-1|}-5$ 의 그래프와 직선 $y=k$ 가 만나지 않도록 하는 실수 $k$ 의 값의 범위를 구하시오.",
        "options": ["$$k \leq -5 \text{ 또는 } k > -4$$", "$$k \geq -5 \text{ 또는 } k < -4$$", "$$k < -5 \text{ 또는 } k \geq -4$$", "$$k > -5 \text{ 또는 } k < -4$$", "$$k \leq -5 \text{ 또는 } k \geq -4$$"],
        "correctAnswer": 1,
        "difficulty": 3,
        "concept": 3,
        "hasImage": false,
        "imageUrl": ""
    },
    {
        "id": 52,
        "text": "오른쪽 그림과 같이 $y$ 축 위의 두 점 $\mathrm{A}, \mathrm{B}$ 에 대하여 두 함수 $y=2^x, y=a^x$ 의 그래프와 점 B 를 지나는 직선 $y=k(k>1)$ 가 만나는 점을 각각 $\mathrm{C}, \mathrm{D}$ 라 하자. 삼각형 ACB 의 넓이가 삼각형 ADC 의 넓이의 2 배일 때, 상수 $a$ 의 값을 구하시오. (단, $1<a<2$ )",
        "options": ["$$\sqrt[]{4}$$",
            "$$\sqrt[2]{4}$$", "$$\sqrt[]{2}$$", "$$\sqrt[]{8}$$",
            "$$\sqrt[2]{8}$$"
        ],
        "correctAnswer": 1,
        "difficulty": 3,
        "concept": 2,
        "hasImage": true,
        "imageUrl": "https://i.ibb.co/jgWw4hJ/image.png"
    },
    {
        "id": 53,
        "text": "$x+2 y-4=0$ 을 만족시키는 실수 $x, y$ 에 대하여 $7^x+49^y$ 은 $x=\alpha, y=\beta$ 일 때 최솟값 $\gamma$ 를 갖는다. 이때 $\alpha+\beta+\gamma$ 의 값은?",
        "options": ["$$ 101 $$", "$$ 100 $$", "$$ 102 $$", "$$ 103 $$", "$$ 104 $$"],
        "correctAnswer": 1,
        "difficulty": 3,
        "concept": 4,
        "hasImage": false,
        "imageUrl": ""
    },
    {
        "id": 54,
        "text": "방정식 $4^{2 x}+a \cdot 4^{x+1}+44-4 a=0$ 의 두 실근의 비가 $1: 2$ 일 때, 실수 $a$ 의 값은?",
        "options": ["$$ -5 $$", "$$ -4 $$", "$$ -3 $$", "$$ -2 $$", "$$ -1 $$"],
        "correctAnswer": 1,
        "difficulty": 3,
        "concept": 5,
        "hasImage": false,
        "imageUrl": ""
    },
    {
        "id": 55,
        "text": "부등식 $\left(x^2-2 x+1\right)^{x-1}<1$ 의 해의 집합을 $S$ 라 할 때, 다음 중 집합 $S$ 의 원소가 아닌 것은? (단, $x \neq 1$ )",
        "options": ["$$\frac{1}{2}$$", "$$\frac{3}{2}$$", "$$-\frac{3}{2}$$", "$$-\frac{1}{2}$$", "$$-\frac{5}{2}$$"],
        "correctAnswer": 1,
        "difficulty": 3,
        "concept": 6,
        "hasImage": false,
        "imageUrl": ""
    },
    {
        "id": 56,
        "text": "오른쪽 그림과 같이 직선 $x=a$ $(a>0)$ 가 두 함수 $y=8^x, y=4^x$ 의 그래프 및 $x$ 축과 만나는 점을 각각 $\mathrm{A}, \mathrm{B}, \mathrm{C}$ 라 하고, 점 A 에서 $y$ 축에 내린 수선의 발을 D , 점 B 를 지나고 $x$ 축에 평행한 직선이 함수 $y=8^x$ 의 그래프와 만나는 점을 E 라 하자. 이때 세 점 $\mathrm{D}, \mathrm{E}, \mathrm{C}$ 가 한 직선 위에 놓이도록 하는 $a$ 의 값을 구하시오.",
        "options": ["$$\log_{2}{3}$$", "$$\log_{3}{2}$$", "$$\log_{2}{6}$$", "$$\log_{3}{6}$$", "$$\log_{2}{5}$$"],
        "correctAnswer": 1,
        "difficulty": 4,
        "concept": 2,
        "hasImage": true,
        "imageUrl": "https://i.ibb.co/JRLcHLj/20241017-182055.png"
    },
    {
        "id": 57,
        "text": "자연수 $n$ 에 대하여 직선 $x=n$ 이 두 함수\n$y=3^{-2 x+11}-9, y=12-2^{-x+4}$ 의 그래프와 만나는 점을 각각 $\mathrm{A}_n, \mathrm{~B}_n$ 이라 하자. 선분 $\mathrm{A}_{\mathrm{n}} \mathrm{B}_{\mathrm{n}}$ 위에 있는 $y$ 좌표가 정수인 점의 개수를 $f(n)$ 이라 할 때,\n$f(n)=f(n+1)$ 을 만족시키는 $n$ 의 최솟값은?",
        "options": ["$$ 6 $$", "$$ 3 $$", "$$ 4 $$", "$$ 5 $$", "$$ 7 $$"],
        "correctAnswer": 1,
        "difficulty": 4,
        "concept": 3,
        "hasImage": false,
        "imageUrl": "https://ibb.co/yP7YsRq"
    },
    {
        "id": 58,
        "text": "$-2 \leq x \leq 2$ 에서 부등식 $a \cdot 2^{-x} \leq 2^{-2 x+1} \leq b \cdot 8^{-x}$ 이 성립할 때, 상수 $a, b$ 에 대하여 $b-a$ 의 최솟값은?",
        "options": ["$$\frac{15}{2}$$", "$$ 7 $$", "$$ 8 $$", "$$\frac{17}{2}$$", "$$ 9 $$"],
        "correctAnswer": 1,
        "difficulty": 4,
        "concept": 5,
        "hasImage": false,
        "imageUrl": ""
    },
    {
        "id": 59,
        "text": "어느 금융상품에 초기자산 $W_0$ 을 투자하고 $t$ 년이 지난 시점에서의 기대자산 $W$ 가 다음과 같이 주어진다고 한다.\n\n$$\begin{aligned}& W=\frac{W_0}{2} 10^{a t}\left(1+10^{a t}\right) \& \text { (단, } W_0>0, t \geq 0 \text { 이고, } a \text { 는 상수이다.) }\end{aligned}$$\n\n\n이 금융상품에 초기자산 $w_0$ 을 투자하고 15 년이 지난 시점에서의 기대자산은 초기자산의 3 배이다. 이 금융상품에 초기자산 $w_0$ 을 투자하고 30 년이 지난 시점에서의 기대자산이 초기자산의 $k$ 배일 때, 실수 $k$ 의 값은? (단, $w_0>0$ )",
        "options": ["$$ 10 $$", "$$ 9 $$", "$$ 11 $$", "$$ 12 $$", "$$ 13 $$"],
        "correctAnswer": 1,
        "difficulty": 4,
        "concept": 5,
        "hasImage": false,
        "imageUrl": ""
    },
    {
        "id": 60,
        "text": "함수 $f(x)=2^x$ 에 대하여 $y=f(x)$ 의 그래프와 두 직선 $x=k, x=k+1$ 의 교점을 각각 $\mathrm{A}_k, \mathrm{~A}_{k+1}$ 이라 하고, 점 $\mathrm{A}_k$ 를 지나고 $x$ 축에 평행한 직선이 직선 $x=k+1$ 과 만나는 점을 $\mathrm{B}_{k+1}$ 이라 하자. 삼각형 $\mathrm{A}_k \mathrm{~B}_{k+1} \mathrm{~A}_{k+1}$ 의 넓이를 $S(k)$ 라 할 때, $f(a)=S(1) S(2) S(3) \cdots S(10)$ 을 만족시키는 실수 $a$ 의 값을 구하시오.",
        "options": ["$$ 45 $$", "$$ 55 $$", "$$ 44 $$", "$$ 36 $$", "$$ 46 $$"],
        "correctAnswer": 1,
        "difficulty": 4,
        "concept": 2,
        "hasImage": true,
        "imageUrl": "https://i.ibb.co/B6wRdSz/image.png"
    },
    {
        "id": 61,
        "text": "함수 $f(x)=\log _3 x+k \log _x 9$ 에 대하여 $f(9)=f(81)$ 일 때, 상수 $k$ 의 값은?",
        "options": ["$$ 4 $$", "$$ 1 $$", "$$ 2 $$", "$$ 3 $$", "$$ 5 $$"],
        "correctAnswer": 1,
        "difficulty": 1,
        "concept": 1,
        "hasImage": false,
        "imageUrl": ""
    },
    {
        "id": 62,
        "text": "$y=\log(x+a)+b$ 의 그래프가 오른쪽 그림과 같을 때, 상수 $a, b$ 에 대하여 $a+b$ 의 값을 구하시오.",
        "options": ["$$ 1 $$", "$$ 0 $$", "$$ -1 $$", "$$ -2 $$", "$$ 2 $$"],
        "correctAnswer": 1,
        "difficulty": 1,
        "concept": 3,
        "hasImage": true,
        "imageUrl": "https://i.ibb.co/749QzTQ/image.png"
    },
    {
        "id": 63,
        "text": "세 수 $A=2 \log _5 3, B=3, C=\log _{25} 115$ 의 대소 관계는?",
        "options": ["$$A < C < B$$", "$$A < B < C$$", "$$C < A < B$$", "$$B < C < A$$", "$$B < A < C$$"],
        "correctAnswer": 1,
        "difficulty": 1,
        "concept": 2,
        "hasImage": false,
        "imageUrl": ""
    },
    {
        "id": 64,
        "text": "정의역이 $\{x \mid-1 \leq x \leq 2\}$ 인 함수 $y=\log _2\left(-x^2+2 x+7\right)$ 의 최댓값과 최솟값의 곱은?",
        "options": ["$$ 6 $$", "$$ 2 $$", "$$ 4 $$", "$$ 8 $$", "$$ 10 $$"],
        "correctAnswer": 1,
        "difficulty": 1,
        "concept": 4,
        "hasImage": false,
        "imageUrl": ""
    },
    {
        "id": 65,
        "text": "방정식 $\log _4 x^2+\log _x 4-3=0$ 의 두 근의 곱은?",
        "options": ["$$ 8 $$", "$$ 1 $$", "$$ 2 $$", "$$ 4 $$", "$$ 16 $$"],
        "correctAnswer": 1,
        "difficulty": 1,
        "concept": 5,
        "hasImage": false,
        "imageUrl": ""
    },
    {
        "id": 66,
        "text": "$x>0$ 일 때, 자연수 $n$ 에 대하여 합수 $f_n(x)$ 가 다음 조건을 모두 만족시킨다.\n(가) $f_1(x)=\log _2 x$\n(나) $f_{n+1}(x)=f_n\left(x^3\right)+f_n(x)$\n이때 $\log _4\left\{f_4(16)\right\}$ 의 값을 구하시오.",
        "options": ["$$ 4 $$", "$$ 3 $$", "$$ 2 $$", "$$ 6 $$", "$$ 5 $$"],
        "correctAnswer": 1,
        "difficulty": 2,
        "concept": 2,
        "hasImage": false,
        "imageUrl": ""
    },
    {
        "id": 67,
        "text": "함수 $y=\log \left(25-x^2\right)$ 의 정의역을 $A$, 함수 $y=\log (\log x)$ 의 정의역을 $B$ 라 할 때, 집합 $A \cap B$ 의 원소 증 모든 정수의 합을 구하시오.",
        "options": ["$$ 9 $$", "$$ 10 $$", "$$ 11 $$", "$$ 12 $$", "$$ 13 $$"],
        "correctAnswer": 1,
        "difficulty": 2,
        "concept": 1,
        "hasImage": false,
        "imageUrl": ""
    },
    {
        "id": 68,
        "text": "이차방정식\n\n$$x^2-2\left(1+\log _3 a\right) x+4\left(1+\log _3 a\right)=0$$\n\n\n이 실근을 갖지 않도륵 하는 양수 $a$ 의 값의 범위는?",
        "options": ["$$\frac{1}{3} < a < 27$$", "$$\frac{1}{4} < a < 27$$", "$$a < \frac{1}{3}$$", "$$a > 27$$", "$$1 < a < 3$$"],
        "correctAnswer": 1,
        "difficulty": 2,
        "concept": 5,
        "hasImage": false,
        "imageUrl": ""
    },
    {
        "id": 69,
        "text": "임의의 양수 $x$ 에 대하여 부등식\n$(\log x)^2-\log x+k>0$ 이 성립하도록 하는 실수 $k$ 의 값의 범위를 구하시오.",
        "options": ["$$ 10 $$", "$$ 100 $$", "$$ 1 $$", "$$ 50 $$", "$$ 5 $$"],
        "correctAnswer": 1,
        "difficulty": 2,
        "concept": 5,
        "hasImage": false,
        "imageUrl": ""
    },
    {
        "id": 70,
        "text": "유입되는 불순믈의 $\frac{1}{5}$ 을 걸러내는 여과기가 있다. 이 여과기를 여러 개 겹쳐서 설치하여 전체 불순믈의 $\frac{1}{10}$ 만 여과기를 통과하게 하려고 한다. 이때 필요한 여과기의 개수를 구하시오.\n(단, $\log 2=0.3$ 으로 계산한다.)",
        "options": ["$$k > \frac{1}{4}$$", "$$k < \frac{1}{4}$$", "$$k = \frac{1}{4}$$", "$$k \geq \frac{1}{4}$$", "$$k \leq \frac{1}{4}$$"],
        "correctAnswer": 1,
        "difficulty": 2,
        "concept": 5,
        "hasImage": false,
        "imageUrl": ""
    },
    {
        "id": 71,
        "text": "부등식 $\left|\log _3 x\right|^2-\left|\log _3 x\right|-6<0$ 의 해를 구하시오.\n(단, $[x]$ 는 $x$ 보다 크지 않은 최대의 정수이다.)",
        "options": ["$$\frac{1}{3} \leq x < 27$$", "$$x < \frac{1}{3}$$", "$$x \geq 27$$", "$$x \leq 27$$", "$$\frac{1}{4} \leq x < 27$$"],
        "correctAnswer": 1,
        "difficulty": 3,
        "concept": 6,
        "hasImage": false,
        "imageUrl": ""
    },
    {
        "id": 72,
        "text": "두 집합\n\n$$\begin{aligned}& A=\left\{x \mid 3^{x(x-2)} \leq 3^{2 x-3}\right\}, \& B=\left\{x \mid \log _2\left(x^2+a x+b\right) \leq \log _2 2 x\right\}\end{aligned}$$\n\n\n가 서로 같을 때, 상수 $a, b$ 에 대하여 $a b$ 의 값을 구하시오.\n(다, $a^2<4 b$ )",
        "options": ["$$ -6 $$", "$$ 6 $$", "$$ -3 $$", "$$ 3 $$", "$$ 4 $$"],
        "correctAnswer": 1,
        "difficulty": 3,
        "concept": 6,
        "hasImage": false,
        "imageUrl": ""
    },
    {
        "id": 73,
        "text": "연립방정식\n\n$$\left\{\begin{array}{l}\log _2 x+\log _3 y=6 \\log _3 x \cdot \log _2 y=8\end{array}\right}.$$\n\n\n의 해가 $x=\alpha, y=\beta$ 일 때, $\alpha+\beta$ 의 값을 구하시오 (단, $\alpha>\beta$)",
        "options": ["$$ 25 $$", "$$ 17 $$", "$$ 19 $$", "$$ 13 $$", "$$ 41 $$"],
        "correctAnswer": 1,
        "difficulty": 3,
        "concept": 5,
        "hasImage": false,
        "imageUrl": ""
    },
    {
        "id": 74,
        "text": "$1<x<4$ 일 때, 세 수\n\n$$A=\log _2 x^2, B=\left(\log _2 x\right)^2, \quad C=\log _2\left(\log _2 x\right)$$\n\n\n의 대소 관계는?",
        "options": ["$$A > B > C$$", "$$A > C > B$$", "$$B > A > C$$", "$$C > B > A$$", "$$B > C > A$$"],
        "correctAnswer": 1,
        "difficulty": 3,
        "concept": 2,
        "hasImage": false,
        "imageUrl": ""
    },
    {
        "id": 75,
        "text": "오른쪽 그림과 같이 두 함수 $y=\log _3 3 x, y=\log _3 \frac{x}{3}$ 의 그래프가 직선 $y=k$ 와 만나는 점을 각각 $\mathrm{A}, \mathrm{B}$ 라 하고, 두 점 $\mathrm{A}, \mathrm{B}$ 들 지나면서 $x$ 축에 수직인 직선이 다른 함수의 그래프와 만나는 점을\n\n각각 $\mathrm{C}, \mathrm{D}$ 라 하자. $\overline{\mathrm{AB}}=5$ 일 때, 두 함수 $y=\log _3 3 x, y=\log _3 \frac{x}{3}$ 의 그래프와 두 선분 $\mathrm{AC}, \mathrm{BD}$ 로 둘러싸인 도형의 넓이들 구하시오.",
        "options": ["$$ 10 $$", "$$ 15 $$", "$$ 5 $$", "$$ 20 $$", "$$ 25 $$"],
        "correctAnswer": 1,
        "difficulty": 3,
        "concept": 3,
        "hasImage": true,
        "imageUrl": "https://i.ibb.co/g31snpN/image.png"
    },
    {
        "id": 76,
        "text": "옳은 것만을 보기에서 있는 대로 고르시오.\n[보 기]\nㄱ. $x>1$ 이면 $\log _2 x>\log _3 x$ 이다.\nㄴ. $1<x<2$ 이면 $\log _2 x<\log _3(x+1)$ 이다.\nㄷ. 방정식 $2^x+\log _2 x=0$ 의 해를 $x=\alpha$ 라 하면 $\frac{1}{2}<\alpha<1$ 이다.",
        "options": ["$$  $$", "$$  $$", "$$ ㄱ $$", "$$  $$", "$$  $$", "$$  $$", "$$ ㄴ $$", "$$  $$", "$$  $$"],
        "correctAnswer": 1,
        "difficulty": 4,
        "concept": 1,
        "hasImage": false,
        "imageUrl": ""
    },
    {
        "id": 77,
        "text": "직선 $y=x$ 위의\n\n한 점 P를 지나고 $x$ 축에 평행한 직선이 곡선\n$y=\log _4\left(x-\frac{1}{4}\right)$ 과\n만나는 점을 Q , 점 P 를 지나고 $y$ 축에 평행한\n직선이 곡선 $y=2^x$ 과 만나는 점을 R라 하자. 삼각형 PQR 가 $\overline{\mathrm{PQ}}=\overline{\mathrm{PR}}$ 인 이등변삼각형일 때, 삼각형 PQR 의 넓이는?",
        "options": ["$$\frac{9}{8}$$", "$$\frac{7}{6}$$", "$$\frac{8}{7}$$", "$$\frac{10}{9}$$", "$$\frac{11}{10}$$"],
        "correctAnswer": 1,
        "difficulty": 4,
        "concept": 2,
        "hasImage": true,
        "imageUrl": "https://i.ibb.co/6nhNf57/image.png"
    },
    {
        "id": 78,
        "text": "함수 $y=\log _2 x$ 의 그래프가\n$x$ 축과 만나는 점을 A 라 하자. 선분 OA 를 $x$ 축의 방향으로 5 만큼,\n$y$ 축의 방향으로 3 만큼 평행이동한\n선분과 $y=\log _2(x+a)$ 의 그래프가\n만날 때, 실수 $a$ 의 최댓값과\n최솟값의 합을 구하시오. (단, O 는 원점이다.)",
        "options": ["$$ 5 $$", "$$ 4 $$", "$$ 8 $$", "$$ 7 $$", "$$ 6 $$"],
        "correctAnswer": 1,
        "difficulty": 4,
        "concept": 2,
        "hasImage": true,
        "imageUrl": "https://i.ibb.co/hcHPm7h/image.png"
    },
    {
        "id": 79,
        "text": "모든 실수 $x$ 에 대하여 부등식\n\n$$\left(1-\log _3 a\right) x^2-2\left(1-\log _3 a\right) x+\log _3 a>0$$\n\n\n이 성립하도록 하는 모든 자연수 $a$ 의 값의 합을 구하시오.",
        "options": ["$$ 5 $$", "$$ 6 $$", "$$ 3 $$", "$$ 9 $$", "$$ 10 $$"],
        "correctAnswer": 1,
        "difficulty": 4,
        "concept": 5,
        "hasImage": false,
        "imageUrl": ""
    },
    {
        "id": 80,
        "text": "부등식 $\log _2(3 x+3) \geq \log _2\left(x^2+k\right)$ 들 만족시키는 정수 $x$ 의 개수가 2 일 때, 상수 $k$ 의 값의 범위를 구하시오. (단, $k>0$)",
        "options": ["$$3 \leq x < 5$$", "$$2 \leq x < 5$$", "$$2 < k < 3$$", "$$k > 5$$", "$$k < 3$$"],
        "correctAnswer": 1,
        "difficulty": 4,
        "concept": 6,
        "hasImage": false,
        "imageUrl": ""
    }
];
