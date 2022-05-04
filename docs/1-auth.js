function authLogin() 
{
     /**
     * @openapi
     * /auth/login:
     *   post:
     *     summary: Auth Login
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
     *     tags:
     *       - Auth 
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
     *                     token:
     *                       type: string
     *                       default: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhZG1pbiI6dHJ1ZSwiZXhwIjoxNjM2OTE0MDU3LCJuYW1lIjoiSm9obiBEb2UifQ.06mOHbHiMGhcTMAH4Y_R7jXVmwY1MytW9midqfj4jDA                   
     *                     refresh_token:
     *                       type: string
     *                       default: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoiNjI2OTA5Zjc3NmJiMzA5YjExZDFhNWY2IiwiaWF0IjoxNjUxNTY5MjYyLCJleHAiOjE2NTE1NjkzODJ9.1zKLGLUXEH                   
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



function authRefreshToken() 
{
     /**
     * @openapi
     * /auth/refresh_token:
     *   post:
     *     summary: Refresh Token
     *     requestBody:
     *       description: Default  
     *       required: true
     *       content:
     *         application/json:
     *           schema:
     *             type: object 
     *             required:
     *               - refresh_token
     *             properties:
     *               refresh_token:
     *                 type: string
     *                 default: 
     *     tags:
     *       - Auth 
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
     *                     token:
     *                       type: string
     *                       default: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhZG1pbiI6dHJ1ZSwiZXhwIjoxNjM2OTE0MDU3LCJuYW1lIjoiSm9obiBEb2UifQ.06mOHbHiMGhcTMAH4Y_R7jXVmwY1MytW9midqfj4jDA                   
     *                     refresh_token:
     *                       type: string
     *                       default: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoiNjI2OTA5Zjc3NmJiMzA5YjExZDFhNWY2IiwiaWF0IjoxNjUxNTY5MjYyLCJleHAiOjE2NTE1NjkzODJ9.1zKLGLUXEH                   
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



function authLogout() 
{
     /**
     * @openapi
     * /auth/logout:
     *   post:
     *     summary: Logout
     *     tags:
     *       - Auth 
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
     *                   default: 400             
     *                 message:
     *                   type: string
     *                   default: Bad Request                            
     *                 data:
     *                   type: null
     *                   default: null                            
     */
}