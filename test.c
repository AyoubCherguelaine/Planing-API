#include<stdio.h>
#include<stdlib.h>

typedef struct Étudiant {
char nom[50];
char voeux ;
float Moy,moy_info,moy_math;
} Étudiant ;

int main()
{ int i=0,n=0;
Étudiant T[400];
do {
     printf("donner le nombre d'étudiants entre 1 et 400 :\n");
    scanf("%d",&n);
}while(!((n>0)&&(n<=400)));


for(i=0;i<n;i++);{

    printf("lecture des informations d'étudiant %d:\n",i);
    getchar ();
    printf("donner le nom : ");
    scanf("%s",&T[i].nom);
    getchar ();

    printf("\n");
    printf("donner le vœux : ");
    
    scanf("%c",&T[i].voeux);
    getchar ();

    printf("donner votre moy_math : ");
    scanf("%f",&T[i].moy_math);
    getchar ();

    printf("donner votre moy_info : ");
    scanf("%f",&T[i].moy_info);
    getchar ();

    printf("donner votre moy : ");
    scanf("%f",&T[i].Moy);
    getchar ();
    printf("\n");
    printf("finished %d\n",i);
}

return 0;
}