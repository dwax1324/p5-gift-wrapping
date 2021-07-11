# Gift Wrapping Algorithm (Convex Hull)



implemeting convex hull using p5.js


각 점에서 가장 왼쪽에있는(반시계방향의) 점을 선택해 연결해 나간다.
왼쪽 판별법: 벡터 곱(cross vector)
2차원상의 x,y에 대해서 벡터곱을 해주면 3차원의 z방향이 나오는데
z방향이 평면상 앞이냐 뒤냐에 따라 양수,음수가 되고
x,y가 완전히 상쇄될시 0이 된다.
이로써 두 점의 방향관계를 파악할 수 있다.




https://pensive-murdock-4eb429.netlify.app




ref:
https://www.youtube.com/watch?v=YNyULRrydVI&list=PLRqwX-V7Uu6ZiZxtDDRCi6uhfTH4FilpH&index=208