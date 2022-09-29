SELECT state , libelle FROM dim_status;

SELECT 
    libelle_region,
    libelle_departement,
    libelle_arrondissement,
    S.libelle,
    COUNT(S.libelle)
FROM
    dim_region AS R
        INNER JOIN
    dim_departement AS D ON D.code_region = R.code_region
        INNER JOIN
    dim_arrondissement AS A ON A.code_departement = D.code_departement
        INNER JOIN
    dim_mariages AS M ON '040104' = A.code_arrondissement
        INNER JOIN
    dim_status AS S ON S.state = M.state
GROUP BY R.libelle_region , libelle_arrondissement;

select libelle_region , libelle_departement ,libelle_arrondissement , S.libelle , count(S.libelle) from dim_region as R
inner join dim_departement as D on D.code_region = R.code_region
inner join dim_arrondissement as A on A.code_departement = D.code_departement
inner join dim_mariages as M on "040104" = A.code_arrondissement
inner join dim_status as S on S.state = M.state
group by R.libelle_region , libelle_arrondissement ;

select libelle , count(libelle) from dim_status  as S 
inner join dim_mariages as M 
on M.state = S.state
group by libelle ;

select libelle , count(libelle) from dim_status  as S 
inner join dim_publications as P 
on P.state = S.state
group by libelle ;

select profession_epoux , profession_epouse  , count(profession_epoux) as NombreProfEpoux , count(profession_epouse) as NombreProfEpouse 
from dim_mariages
group by profession_epoux , profession_epouse ;



select libelle_region , libelle_departement ,libelle_arrondissement , count(M.id_naiss) from dim_region as R
inner join dim_departement as D on D.code_region = R.code_region
inner join dim_arrondissement as A on A.code_departement = D.code_departement
inner join  dim_cec_principale as C on C.code_arrondissement = A.code_arrondissement
inner join dim_naisssance as M on M.centre_etat = C.immatriculation
group by R.libelle_region , libelle_arrondissement ;

select libelle_region , libelle_departement ,libelle_arrondissement , libelle, M.sexe, count(nomcec ) , count(sexe) , nomcec from dim_region as R
inner join dim_departement as D on D.code_region = R.code_region
inner join dim_arrondissement as A on A.code_departement = D.code_departement
inner join  dim_cec_principale as C on C.code_arrondissement = A.code_arrondissement
inner join dim_naisssance as M on M.centre_etat = C.immatriculation
inner join dim_status as S on S.state = M.state
group by R.libelle_region , libelle_arrondissement  , nomcec  , sexe; 


select libelle_region , libelle_departement ,libelle_arrondissement ,nomcec ,libelle, M.sexe,  count(sexe) , nomcec from dim_region as R
inner join dim_departement as D on D.code_region = R.code_region
inner join dim_arrondissement as A on A.code_departement = D.code_departement
inner join  dim_cec_principale as C on C.code_arrondissement = A.code_arrondissement
inner join dim_naisssance as M on M.centre_etat = C.immatriculation
inner join dim_status as S on S.state = M.state
group by libelle  , sexe; 

select sexe  , count(sexe) as Nombre from dim_naisssance ;
group by sexe ;


	select  count(id_naiss) as Nombre from dim_naisssance 
	inner join  dim_status 
	on dim_naisssance.state = 10 and dim_status.state  = 10 ;

select count(id_naiss) as Nombre from dim_dec_naissance ;

SELECT origine_dec , count(origine_dec) as nombre FROM dim_dec_naissance
where origine_dec = 1;


SELECT situation_matrimoniale_mere , count(situation_matrimoniale_mere) as nombre FROM dim_dec_naissance
where situation_matrimoniale_mere ="CELIBATAIRE"
group by situation_matrimoniale_mere