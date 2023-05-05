SELECT
    *
FROM
    Donor,
    Work
WHERE
    Donor.id = Work.owner
    AND
    Donor.first_name != "Mahdi";

THEN;

SELECT * FROM Work WHERE id = 5;