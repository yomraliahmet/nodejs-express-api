function createOrder() 
{
     /**
     * @openapi
     * /orders:
     *   post:
     *     summary: Create Order
     *     requestBody:
     *       description: Default  
     *       required: true
     *       content:
     *         application/json:
     *           schema:
     *             type: object 
     *             required:
     *               - product_id
     *             properties:
     *               product_id:
     *                 type: string
     *                 default: 6269217deeb739eb69748238
     *     tags:
     *       - Orders 
     *     security:
     *       - bearerAuth: []
     *     responses:
     *       200:
     *         content:
     *           application/json:
     *             schema:
     *               type: object
     *               properties:
     *                 code:
     *                   type: integer
     *                   default: 200             
     *                 message:
     *                   type: string
     *                   default: Success             
     *                 data:
     *                   type: object
     *                   properties:
     *                     id:
     *                       type: string
     *                       default: 1
     *                     user:
     *                       type: object   
     *                       properties:   
     *                         id:
     *                           type: string    
     *                           default: 6269217deeb739eb69748225    
     *                         username:
     *                           type: string    
     *                           default: john_doe    
     *                         first_name:
     *                           type: string    
     *                           default: John    
     *                         last_name:
     *                           type: string    
     *                           default: Doe    
     *                         city:
     *                           type: string    
     *                           default: Kayseri    
     *                     product:
     *                       type: object   
     *                       properties:   
     *                         id:
     *                           type: string    
     *                           default: 6269217deeb739eb69748238    
     *                         product_code:
     *                           type: string    
     *                           default: 3579516547    
     *                         name:
     *                           type: string    
     *                           default: Product 1  
     *       default:
     *         content:
     *           application/json:
     *             schema:
     *               type: object
     *               properties:
     *                 code:
     *                   type: integer
     *                   default: 400             
     *                 message:
     *                   type: string
     *                   default: Bad Request                            
     *                 data:
     *                   type: null
     *                   default: null                            
     */
}



function getOrders() 
{
     /**
     * @openapi
     * /orders:
     *   get:
     *     summary: Show User Orders
     *     tags:
     *       - Orders
     *     security:
     *       - bearerAuth: []
     *     responses:
     *       200:
     *         content:
     *           application/json:
     *             schema:
     *               type: object
     *               properties:
     *                 code:
     *                   type: integer
     *                   default: 200             
     *                 message:
     *                   type: string
     *                   default: Success             
     *                 data:
     *                   type: array
     *                   items:
     *                     properties:
     *                       id:
     *                         type: string
     *                         default: 1
     *                       user:
     *                         type: object   
     *                         properties:   
     *                           id:
     *                             type: string    
     *                             default: 6269217deeb739eb69748225    
     *                           username:
     *                             type: string    
     *                             default: john_doe    
     *                           first_name:
     *                             type: string    
     *                             default: John    
     *                           last_name:
     *                             type: string    
     *                             default: Doe    
     *                           city:
     *                             type: string    
     *                             default: Kayseri    
     *                       product:
     *                         type: object   
     *                         properties:   
     *                           id:
     *                             type: string    
     *                             default: 6269217deeb739eb69748238    
     *                           product_code:
     *                             type: string    
     *                             default: 3579516547    
     *                           name:
     *                             type: string    
     *                             default: Product 1
     *       default:
     *         content:
     *           application/json:
     *             schema:
     *               type: object
     *               properties:
     *                 code:
     *                   type: integer
     *                   default: 404             
     *                 message:
     *                   type: string
     *                   default: Not Found                           
     *                 data:
     *                   type: null
     *                   default: null                            
     */
}


function getOrder() 
{
     /**
     * @openapi
     * /orders/{id}:
     *   get:
     *     summary: Show a User Order
     *     tags:
     *       - Orders
     *     security:
     *       - bearerAuth: []
     *     parameters:
     *       - name: id
     *         in: path
     *         required: true
     *         schema:
     *           type: string
     *     responses:
     *       200:
     *         content:
     *           application/json:
     *             schema:
     *               type: object
     *               properties:
     *                 code:
     *                   type: integer
     *                   default: 200             
     *                 message:
     *                   type: string
     *                   default: Success             
     *                 data:
     *                   type: object
     *                   properties:
     *                     id:
     *                       type: string
     *                       default: 1
     *                     user:
     *                       type: object   
     *                       properties:   
     *                         id:
     *                           type: string    
     *                           default: 6269217deeb739eb69748225    
     *                         username:
     *                           type: string    
     *                           default: john_doe    
     *                         first_name:
     *                           type: string    
     *                           default: John    
     *                         last_name:
     *                           type: string    
     *                           default: Doe    
     *                         city:
     *                           type: string    
     *                           default: Kayseri    
     *                     product:
     *                       type: object   
     *                       properties:   
     *                         id:
     *                           type: string    
     *                           default: 6269217deeb739eb69748238    
     *                         product_code:
     *                           type: string    
     *                           default: 3579516547    
     *                         name:
     *                           type: string    
     *                           default: Product 1
     *       default:
     *         content:
     *           application/json:
     *             schema:
     *               type: object
     *               properties:
     *                 code:
     *                   type: integer
     *                   default: 404             
     *                 message:
     *                   type: string
     *                   default: Not Found                           
     *                 data:
     *                   type: null
     *                   default: null                            
     */
}