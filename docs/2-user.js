function createUser() 
{
     /**
     * @openapi
     * /users:
     *   post:
     *     summary: Create User
     *     requestBody:
     *       description: Default  
     *       required: true
     *       content:
     *         application/json:
     *           schema:
     *             type: object 
     *             required:
     *               - username 
     *               - password 
     *             properties:
     *               username:
     *                 type: string
     *                 default: john_doe
     *               password:
     *                 type: string
     *                 default: 123456
     *               first_name:
     *                 type: string
     *                 default: John
     *               last_name:
     *                 type: string
     *                 default: Doe
     *               city:
     *                 type: string
     *                 default: Kayseri
     *     tags:
     *       - Users 
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
     *                     username:
     *                       type: string
     *                       default: john_doe
     *                     first_name:
     *                       type: string
     *                       default: John
     *                     last_name:
     *                       type: string
     *                       default: Doe
     *                     city:
     *                       type: string
     *                       default: Kayseri
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


function getUsers() 
{
     /**
     * @openapi
     * /users:
     *   get:
     *     summary: Show All Users
     *     tags:
     *       - Users
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
     *                         type: integer
     *                         default: 1
     *                       username:
     *                         type: string
     *                         default: john_doe
     *                       first_name:
     *                         type: string
     *                         default: John
     *                       last_name:
     *                         type: string
     *                         default: Doe
     *                       city:
     *                         type: string
     *                         default: Kayseri
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


function getUser() 
{
     /**
     * @openapi
     * /users/{id}:
     *   get:
     *     summary: Show a User
     *     tags:
     *       - Users
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
     *                       type: integer
     *                       default: 1
     *                     username:
     *                       type: string
     *                       default: john_doe
     *                     first_name:
     *                       type: string
     *                       default: John
     *                     last_name:
     *                       type: string
     *                       default: Doe
     *                     city:
     *                       type: string
     *                       default: Kayseri
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


function updateUser() 
{
     /**
     * @openapi
     * /users/{id}:
     *   put:
     *     summary: Update a User
     *     tags:
     *       - Users
     *     security:
     *       - bearerAuth: []
     *     parameters:
     *       - name: id
     *         in: path
     *         required: true
     *         schema:
     *           type: string
     *     requestBody:
     *       description: Default  
     *       required: true
     *       content:
     *         application/json:
     *           schema:
     *             type: object 
     *             required:
     *               - username 
     *               - password 
     *             properties:
     *               first_name:
     *                 type: string
     *                 default: John
     *               last_name:
     *                 type: string
     *                 default: Doe
     *               city:
     *                 type: string
     *                 default: Kayseri
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
     *                       type: integer
     *                       default: 1
     *                     username:
     *                       type: string
     *                       default: john_doe
     *                     first_name:
     *                       type: string
     *                       default: John
     *                     last_name:
     *                       type: string
     *                       default: Doe
     *                     city:
     *                       type: string
     *                       default: Kayseri
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


function deleteUser() 
{
     /**
     * @openapi
     * /users/{id}:
     *   delete:
     *     summary: Delete a User
     *     tags:
     *       - Users
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
     *                   type: null
     *                   default: null
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