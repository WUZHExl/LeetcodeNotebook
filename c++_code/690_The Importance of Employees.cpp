#include <vector>
#include <stdio.h>
using namespace std;

// Definition for Employee.
class Employee {
public:
    int id;
    int importance;
    vector<int> subordinates;
};


class Solution {
public:
    int getImportance(vector<Employee*> employees, int id) {
        int sum=0;
        for(int i=0;i<employees.size();i++)
        {
            Employee e=employees[i];
            
        }

    }
};

int main()
{

    return 0;
}