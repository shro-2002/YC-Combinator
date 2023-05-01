-- TYPE YOUR SQL QUERY BELOW

-- PART 1: Create a SQL query that maps out the daily average users before and after the feature change

select
    avg(num_unique_user),
    user_cohort
from (
    select
        num_unique_user,
        case when timestamp_date < '2018-06-02' then 'before' else 'after' end as user_cohort
    from (
        select count(distinct user_id) as num_unique_user, timestamp_date
        from (
            select user_id, date(login_timestamp, 'unixepoch', 'localtime') as timestamp_date
            from login_history
        ) tbl_with_date
        group by timestamp_date
    ) tbl_with_cohort_split
) subquery group by user_cohort;

-- PART 2: Create a SQL query that indicates the number of status changes by card

select 
    card.name as Company_Name, 
    card_change_history.cardID as Company_ID, 
    count(*) - 1 as Change_Count
from card_change_history 
inner join card on card.id = card_change_history.cardID 
-- where card_change_history.oldStatus IS NOT NULL 
group by cardID;
