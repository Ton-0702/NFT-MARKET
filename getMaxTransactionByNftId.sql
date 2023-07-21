SELECT n.account_id, n.image, n.nft_name, n.price, t.nft_id, MAX(t.highest_bid), COUNT(t.nft_id) AS trending
FROM transaction_bid AS t 
INNER JOIN nft AS n ON n.nft_id = t.nft_id
WHERE DATEDIFF(DATE(n.date_end_bid), DATE("2023-07-16")) > 0
GROUP BY t.nft_id