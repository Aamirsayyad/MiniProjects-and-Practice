#include <iostream>
#include <vector>
using namespace std;

void expand(vector<vector<char>> &board, int m, int n)
{
    vector<pair<int, int>> dr = {{1, 1}, {1, -1}, {-1, 1}, {-1, -1}, {0, 1}, {1, 0}, {-1, 0}, {0, -1}};
    int  rows=board.size();
    int cols=board[0].size();
    for (int i = 0; i < dr.size(); i++)
    {
        int  dm=dr[i].first;
        int  dn=dr[i].second;
        int M=m+dm;
        int N=n+dn;
        while(M<rows && M>=0 && N>=0 && N<cols){
            board[M][N]='X';
            M=M+dm;
            N=N+dn;
        }
    }
}

int main()
{
    vector<vector<char>> board = {
        {'.', '.', '.', '.', '.', '.', '.', '.'},
        {'.', '.', '.', '.', '.', '.', '.', '.'},
        {'.', '.', '.', '.', '.', '.', '.', '.'},
        {'.', '.', '.', '.', '.', '.', '.', '.'},
        {'.', '.', '.', '.', '.', '.', '.', '.'},
        {'.', '.', '.', '.', '.', '.', '.', '.'},
        {'.', '.', '.', '.', '.', '.', '.', '.'},
        {'.', '.', '.', '.', '.', '.', '.', '.'}};

    expand(board,3,3);
    for(int i=0;i<board.size();i++){
        for(int j=0;j<board.size();j++){
            cout<<board[i][j]<<" ";
        }
        cout<<endl;
    }
    return 0;
}
