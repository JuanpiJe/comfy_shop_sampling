SELECT survey.id as EncuestaNumero, shop.name as Tienda , user.email as EmailUsuario,product.name as NombreProducto, body_part.name_es as ParteDelCuerpo, rating.name_es as Puntuación
FROM survey
INNER JOIN user_feedback
ON survey.id = user_feedback.survey_id
INNER JOIN product
ON user_feedback.product_id = product.id
INNER JOIN body_part
ON user_feedback.body_part_id = body_part.id
INNER JOIN rating
ON user_feedback.rating_id = rating.id
INNER JOIN user
ON user_feedback.user_id = user.id
INNER JOIN shop
ON survey.shop_id = shop.id