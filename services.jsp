<%-- 
    Document   : services
    Created on : 20/11/2014, 10:15:15 AM
    Author     : jorge.jimenez
--%>
<%@page import="java.security.NoSuchAlgorithmException"%><%@page import="java.security.MessageDigest"%><%@page contentType="text/json" pageEncoding="UTF-8"%><%@page import="org.json.*"%><%@page import="java.util.*"%>
<%
    System.out.println("Entra a Services.jsp/commId:"+request.getParameter("commId")+",session:"+request.getSession().getId());
    response.addHeader("Access-Control-Allow-Origin", "*");
    if(request.getParameter("srv")!=null)
    {
        System.out.println("Server/Service:"+request.getParameter("srv"));
        if(request.getParameter("srv").equals("1"))
        {
            out.println(getService1(request));
        }else if(request.getParameter("srv").equals("2"))
        {
            out.println(getService2(request));
        }else if(request.getParameter("srv").equals("3"))
        {
            out.println(getService3(request));
        }else if(request.getParameter("srv").equals("4"))
        {
            out.println(getService4(request));
        }else if(request.getParameter("srv").equals("5"))
        {
            out.println(getService5(request));
        }else if(request.getParameter("srv").equals("6"))
        {
            out.println(getService6(request));
        }else if(request.getParameter("srv").equals("7"))
        {
            out.println(getService7(request));
        }
    }
%>
<%!
    JSONObject getService0(HttpServletRequest request) throws Exception //Login
    {
        if(request.getParameter("commId")==null) return null; 
        JSONObject nodeResponse = new JSONObject();
        if(request.getParameter("commId").equals("1")) { 
            nodeResponse.put("Id", "Community10545");
            nodeResponse.put("Name", "Smart City Pois");
        }else if(request.getParameter("commId").equals("2")) { 
            nodeResponse.put("Id", "Community10546");
            nodeResponse.put("commName", "Comunidad X");
        }else if(request.getParameter("commId").equals("3")) { 
            nodeResponse.put("Id", "Community10547");
            nodeResponse.put("commName", "Comunidad Y");
        }
        return nodeResponse;
    }


    JSONObject getService1(HttpServletRequest request) throws Exception //Community Data
    {
        if(request.getParameter("commId")==null) return null; 
        JSONObject nodeResponse = new JSONObject();
        if(request.getParameter("commId").equals("1")) { 
            nodeResponse.put("Id", "Community10545");
            nodeResponse.put("Name", "Smart City Pois");
        }else if(request.getParameter("commId").equals("2")) { 
            nodeResponse.put("Id", "Community10546");
            nodeResponse.put("Name", "Comunidad X");
        }else if(request.getParameter("commId").equals("3")) { 
            nodeResponse.put("Id", "Community10547");
            nodeResponse.put("Name", "Comunidad Y");
        }
        return nodeResponse;
    }
    
    JSONObject getService2(HttpServletRequest request) throws Exception //User Data
    {
        if(request.getParameter("commId")==null) return null; 
        JSONObject nodeResponse = new JSONObject();
        if(request.getParameter("commId").equals("1")) { 
            nodeResponse.put("userName", "Ricardo Alcalá");
        }else if(request.getParameter("commId").equals("2")) { 
            nodeResponse.put("userName", "Antonio Nuño Sanchez");
        }else if(request.getParameter("commId").equals("3")) { 
            nodeResponse.put("userName", "Jorge Jiménez");
        }
        return nodeResponse;
    }
    
    
    JSONArray getService3(HttpServletRequest request) throws Exception //gets List of Objects
    {
        /*
        Enumeration<String> enParams=request.getParameterNames(); 
        while(enParams.hasMoreElements())
        {
            String paramName=enParams.nextElement();
            System.out.println("paramName:"+paramName+",value:"+request.getParameter(paramName));
        }
        String token_login="abcdefg1234";
        String passw="miPassword";
        String sSha1=sha1(token_login+passw);
        System.out.println("Server/sSha1:"+sSha1);
        String sSha256=sha256(token_login+passw);
        System.out.println("Server/sSha256:"+sSha256);
        */
        
        if(request.getParameter("commId")==null) return null; 
        JSONArray jsonArray = new JSONArray();
       
        
        JSONObject node1 = new JSONObject();
        node1.put("objectId", "1");
        if(request.getParameter("commId").equals("1")) node1.put("objName", "Tipo de Objeto 1");
        if(request.getParameter("commId").equals("2")) node1.put("objName", "Tipo de Objeto 1T");
        if(request.getParameter("commId").equals("2")) node1.put("objName", "Tipo de Objeto 1J");
        //node1.put("iconClass", "ui-icon-contacts");
        jsonArray.put(node1);
        
        
        JSONObject node2 = new JSONObject();
        node2.put("objectId", "2");
        if(request.getParameter("commId").equals("1")) node2.put("objName", "Puntos de Interes");
        else if(request.getParameter("commId").equals("2")) node2.put("objName", "Puntos de Interes1");
        else if(request.getParameter("commId").equals("3")) node2.put("objName", "Objeto 2");
        //node1.put("iconClass", "ui-icon-poi");
        jsonArray.put(node2);
        JSONObject node3 = new JSONObject();
        node3.put("objectId", "3");
        if(request.getParameter("commId").equals("1")) node3.put("objName", "NeewsFeed");
        else if(request.getParameter("commId").equals("2")) node3.put("objName", "NeewsFeed Toño");
        else if(request.getParameter("commId").equals("3")) node3.put("objName", "Objeto 3");
        //node2.put("iconClass", "ui-icon-poi");
        jsonArray.put(node3);
        
        
        return jsonArray; 
    }
    
    
    JSONArray getService4(HttpServletRequest request) throws Exception //ObjectType Instances
    {
        if(request.getParameter("objectId")==null) return null; 
        JSONArray jsonArray = new JSONArray();
        
        if(request.getParameter("objectId").equals("1")) { 
            JSONObject node1 = new JSONObject();
            node1.put("Id", "1");
            node1.put("Name", "Angel de la Independencia");
            node1.put("Image", "http://swbsocial.infotec.com.mx/spribo/img/angel.png");
            jsonArray.put(node1);
            
            JSONObject node2 = new JSONObject();
            node2.put("Id", "2");
            node2.put("Name", "Bellas Artes");
            node2.put("Image", "http://swbsocial.infotec.com.mx/spribo/img/bellasa.png");
            jsonArray.put(node2);
            
            JSONObject node3 = new JSONObject();
            node3.put("Id", "3");
            node3.put("Name", "Centro Historico");
            node3.put("Image", "http://swbsocial.infotec.com.mx/spribo/img/centroh.png");
            jsonArray.put(node3);
            
            JSONObject node4 = new JSONObject();
            node4.put("Id", "4");
            node4.put("Name", "Feria de Chapultepec");
            node4.put("Image", "http://swbsocial.infotec.com.mx/spribo/img/feria.png");
            jsonArray.put(node4);
            
            JSONObject node5 = new JSONObject();
            node5.put("Id", "5");
            node5.put("Name", "Piramide del Sol");
            node5.put("Image", "http://swbsocial.infotec.com.mx/spribo/img/piramide.png");
            jsonArray.put(node5);
            
            JSONObject node6 = new JSONObject();
            node6.put("Id", "6");
            node6.put("Name", "Six Flags");
            node6.put("Image", "http://swbsocial.infotec.com.mx/spribo/img/six.png");
            jsonArray.put(node6);
            
            JSONObject node7 = new JSONObject();
            node7.put("Id", "7");
            node7.put("Name", "Six Flags");
            node7.put("Image", "http://swbsocial.infotec.com.mx/spribo/img/six.png");
            jsonArray.put(node7);
            
            JSONObject node8 = new JSONObject();
            node8.put("Id", "8");
            node8.put("Name", "Six Flags");
            node8.put("Image", "http://swbsocial.infotec.com.mx/spribo/img/six.png");
            jsonArray.put(node8);
            
            JSONObject node9 = new JSONObject();
            node9.put("Id", "9");
            node9.put("Name", "Six Flags");
            node9.put("Image", "http://swbsocial.infotec.com.mx/spribo/img/six.png");
            jsonArray.put(node9);
            
            JSONObject node10 = new JSONObject();
            node10.put("Id", "10");
            node10.put("Name", "Six Flags");
            node10.put("Image", "http://swbsocial.infotec.com.mx/spribo/img/six.png");
            jsonArray.put(node10);
            
        }else if(request.getParameter("objectId").equals("2")) { 
            JSONObject node1 = new JSONObject();
            node1.put("Id", "1");
            node1.put("Name", "Angel de la Independencia Toño");
            node1.put("Image", "http://swbsocial.infotec.com.mx/spribo/img/angel.png");
            jsonArray.put(node1);
            
            JSONObject node2 = new JSONObject();
            node2.put("Id", "2");
            node2.put("Name", "Bellas Artes Toño");
            node2.put("Image", "http://swbsocial.infotec.com.mx/spribo/img/bellasa.png");
            jsonArray.put(node2);
            
            JSONObject node3 = new JSONObject();
            node3.put("Id", "3");
            node3.put("Name", "Centro Historico Toño");
            node3.put("Image", "http://swbsocial.infotec.com.mx/spribo/img/centroh.png");
            jsonArray.put(node3);
            
            JSONObject node4 = new JSONObject();
            node4.put("Id", "4");
            node4.put("Name", "Feria de Chapultepec Toño");
            node4.put("Image", "http://swbsocial.infotec.com.mx/spribo/img/feria.png");
            jsonArray.put(node4);
            
            JSONObject node5 = new JSONObject();
            node5.put("Id", "5");
            node5.put("Name", "Piramide del Sol Toño");
            node5.put("Image", "http://swbsocial.infotec.com.mx/spribo/img/piramide.png");
            jsonArray.put(node5);
            
            JSONObject node6 = new JSONObject();
            node6.put("Id", "6");
            node6.put("Name", "Six Flags Toño");
            node6.put("Image", "http://swbsocial.infotec.com.mx/spribo/img/six.png");
            jsonArray.put(node6);
            
        }else if(request.getParameter("objectId").equals("3")) { 
            JSONObject node1 = new JSONObject();
            node1.put("Id", "1");
            node1.put("Name", "14 Congreso Mundial Subud");
            node1.put("Image", "http://swbsocial.infotec.com.mx/spribo/img/chapultepec.png");
            jsonArray.put(node1); 
            
            JSONObject node2 = new JSONObject();
            node2.put("Id", "2");
            node2.put("Name", "15 Congreso Mundial Subud");
            node2.put("Image", "http://swbsocial.infotec.com.mx/spribo/img/chapultepec.png");
            jsonArray.put(node2); 
            
            JSONObject node3 = new JSONObject();
            node3.put("Id", "3");
            node3.put("Name", "16 Congreso Mundial Subud");
            node3.put("Image", "http://swbsocial.infotec.com.mx/spribo/img/chapultepec.png");
            jsonArray.put(node3); 
        }
        return jsonArray; 
    }
    
    
    JSONArray getService5(HttpServletRequest request) throws Exception //ObjectType Data
    {
        if(request.getParameter("objInstanceId")==null) return null; 
        JSONArray jsonArray = new JSONArray();
        
        if(request.getParameter("objInstanceId").equals("1")) { 
            
            JSONObject node1 = new JSONObject();
            node1.put("propertyName", "Descripción");
            node1.put("propertyValue", "Valor de propiedad descripción");
            node1.put("Image", "http://swbsocial.infotec.com.mx/spribo/img/frida.png");
            jsonArray.put(node1);
            
            JSONObject node2 = new JSONObject();
            node2.put("propertyName", "Historia");
            node2.put("propertyValue", "Valor de propiedad Historia");
            node2.put("Image", "http://swbsocial.infotec.com.mx/spribo/img/frida.png");
            jsonArray.put(node2);
            
            JSONObject node3 = new JSONObject();
            node3.put("propertyName", "Centro Historico");
            node3.put("propertyValue", "Valor de propiedad Centro Historico");
            node3.put("Image", "http://swbsocial.infotec.com.mx/spribo/img/frida.png");
            jsonArray.put(node3);
            
            JSONObject node4 = new JSONObject();
            node4.put("propertyName", "Normas de Visita");
            node4.put("propertyValue", "Valor de propiedad Normas de Visita");
            node4.put("Image", "http://swbsocial.infotec.com.mx/spribo/img/frida.png");
            jsonArray.put(node4);
            
            JSONObject node5 = new JSONObject();
            node5.put("propertyName", "Objetos de Interes");
            node5.put("propertyValue", "Valor de propiedad Objetos de Interes");
            node5.put("Image", "http://swbsocial.infotec.com.mx/spribo/img/frida.png");
            jsonArray.put(node5);
            
            JSONObject node6 = new JSONObject();
            node6.put("propertyName", "Publicaciones");
            node6.put("propertyValue", "Valor de propiedad Publicaciones");
            node6.put("Image", "http://swbsocial.infotec.com.mx/spribo/img/frida.png");
            jsonArray.put(node6);
            
            JSONObject node7 = new JSONObject();
            node7.put("propertyName", "Recomendaciones");
            node7.put("propertyValue", "Valor de propiedad Recomendaciones");
            node7.put("Image", "http://swbsocial.infotec.com.mx/spribo/img/frida.png");
            jsonArray.put(node7);
            
        }else if(request.getParameter("objInstanceId").equals("2")) { 
            
            JSONObject node1 = new JSONObject();
            node1.put("propertyName", "Descripción Instance2");
            node1.put("propertyValue", "Valor de propiedad descripción");
            node1.put("Image", "http://swbsocial.infotec.com.mx/spribo/img/frida.png");
            jsonArray.put(node1);
            
            JSONObject node2 = new JSONObject();
            node2.put("propertyName", "Historia Instance2");
            node2.put("propertyValue", "Valor de propiedad Historia");
            node2.put("Image", "http://swbsocial.infotec.com.mx/spribo/img/frida.png");
            jsonArray.put(node2);
            
            JSONObject node3 = new JSONObject();
            node3.put("propertyName", "Centro Historico Instance2");
            node3.put("propertyValue", "Valor de propiedad Centro Historico");
            node3.put("Image", "http://swbsocial.infotec.com.mx/spribo/img/frida.png");
            jsonArray.put(node3);
            
            JSONObject node4 = new JSONObject();
            node4.put("propertyName", "Normas de Visita Instance2");
            node4.put("propertyValue", "Valor de propiedad Normas de Visita");
            node4.put("Image", "http://swbsocial.infotec.com.mx/spribo/img/frida.png");
            jsonArray.put(node4);
            
            JSONObject node5 = new JSONObject();
            node5.put("propertyName", "Objetos de Interes Instance2");
            node5.put("propertyValue", "Valor de propiedad Objetos de Interes");
            node5.put("Image", "http://swbsocial.infotec.com.mx/spribo/img/frida.png");
            jsonArray.put(node5);
            
            JSONObject node6 = new JSONObject();
            node6.put("propertyName", "Publicaciones Instance2");
            node6.put("propertyValue", "Valor de propiedad Publicaciones");
            node6.put("Image", "http://swbsocial.infotec.com.mx/spribo/img/frida.png");
            jsonArray.put(node6);
            
            JSONObject node7 = new JSONObject();
            node7.put("propertyName", "Recomendaciones Instance2");
            node7.put("propertyValue", "Valor de propiedad Recomendaciones");
            node7.put("Image", "http://swbsocial.infotec.com.mx/spribo/img/frida.png");
            jsonArray.put(node7);
            
        }else if(request.getParameter("objInstanceId").equals("3")) { 
            JSONObject node1 = new JSONObject();
            node1.put("propertyName", "Recomendaciones Instance3");
            node1.put("propertyValue", "Valor de propiedad Recomendaciones");
            node1.put("Image", "http://swbsocial.infotec.com.mx/spribo/img/frida.png");
            jsonArray.put(node1); 
            
            JSONObject node2 = new JSONObject();
            node2.put("propertyName", "Servicios Instance3");
            node2.put("propertyValue", "Valor de propiedad Servicios");
            node2.put("Image", "http://swbsocial.infotec.com.mx/spribo/img/frida.png");
            jsonArray.put(node2); 
            
            JSONObject node3 = new JSONObject();
            node3.put("propertyName", "Visitantes Instance3");
            node3.put("propertyValue", "Valor de propiedad Visitatantes");
            node3.put("Image", "http://swbsocial.infotec.com.mx/spribo/img/frida.png");
            jsonArray.put(node3); 
        }else if(request.getParameter("objInstanceId").equals("4")) { 
            JSONObject node1 = new JSONObject();
            node1.put("propertyName", "Recomendaciones Instance4");
            node1.put("propertyValue", "Valor de propiedad Recomendaciones");
            node1.put("Image", "http://swbsocial.infotec.com.mx/spribo/img/frida.png");
            jsonArray.put(node1); 
            
            JSONObject node2 = new JSONObject();
            node2.put("propertyName", "Servicios Instance4");
            node2.put("propertyValue", "Valor de propiedad Servicios");
            node2.put("Image", "http://swbsocial.infotec.com.mx/spribo/img/frida.png");
            jsonArray.put(node2); 
            
            JSONObject node3 = new JSONObject();
            node3.put("propertyName", "Visitantes Instance4");
            node3.put("propertyValue", "Valor de propiedad Visitatantes");
            node3.put("Image", "http://swbsocial.infotec.com.mx/spribo/img/frida.png");
            jsonArray.put(node3); 
        }else if(request.getParameter("objInstanceId").equals("5")) { 
            JSONObject node1 = new JSONObject();
            node1.put("propertyName", "Recomendaciones Instance5");
            node1.put("propertyValue", "Valor de propiedad Recomendaciones");
            node1.put("Image", "http://swbsocial.infotec.com.mx/spribo/img/frida.png");
            jsonArray.put(node1); 
            
            JSONObject node2 = new JSONObject();
            node2.put("propertyName", "Servicios Instance5");
            node2.put("propertyValue", "Valor de propiedad Servicios");
            node2.put("Image", "http://swbsocial.infotec.com.mx/spribo/img/frida.png");
            jsonArray.put(node2); 
            
            JSONObject node3 = new JSONObject();
            node3.put("propertyName", "Visitantes Instance5");
            node3.put("propertyValue", "Valor de propiedad Visitatantes");
            node3.put("Image", "http://swbsocial.infotec.com.mx/spribo/img/frida.png");
            jsonArray.put(node3); 
        }else if(request.getParameter("objInstanceId").equals("6")) { 
            JSONObject node1 = new JSONObject();
            node1.put("propertyName", "Recomendaciones Instance6");
            node1.put("propertyValue", "Valor de propiedad Recomendaciones");
            node1.put("Image", "http://swbsocial.infotec.com.mx/spribo/img/frida.png");
            jsonArray.put(node1); 
            
            JSONObject node2 = new JSONObject();
            node2.put("propertyName", "Servicios Instance6");
            node2.put("propertyValue", "Valor de propiedad Servicios");
            node2.put("Image", "http://swbsocial.infotec.com.mx/spribo/img/frida.png");
            jsonArray.put(node2); 
            
            JSONObject node3 = new JSONObject();
            node3.put("propertyName", "Visitantes Instance6");
            node3.put("propertyValue", "Valor de propiedad Visitatantes");
            node3.put("Image", "http://swbsocial.infotec.com.mx/spribo/img/frida.png");
            jsonArray.put(node3); 
        }
        return jsonArray; 
    }
    
    JSONObject getService6(HttpServletRequest request) throws Exception //ObjectType Service
    {
        if(request.getParameter("objectId")==null) return null; 
        JSONObject nodeResponse = new JSONObject();
        if(request.getParameter("objectId").equals("1")) { 
            nodeResponse.put("Id", "1");
            nodeResponse.put("Name", "Tipo de Objeto 1");
        }else if(request.getParameter("objectId").equals("2")) { 
            nodeResponse.put("Id", "2");
            nodeResponse.put("Name", "Puntos de Interes");
        }else if(request.getParameter("objectId").equals("3")) { 
            nodeResponse.put("Id", "3");
            nodeResponse.put("Name", "NeewsFeed");
        }
        return nodeResponse;
    }
    
    
    JSONObject getService7(HttpServletRequest request) throws Exception //ObjectTypeInstance Service
    {
        if(request.getParameter("objInstanceId")==null) return null; 
        JSONObject nodeResponse = new JSONObject();
        if(request.getParameter("objInstanceId").equals("1")) { 
            nodeResponse.put("Name", "Angel de la Independencia");
            nodeResponse.put("Image", "http://swbsocial.infotec.com.mx/spribo/img/angel_big.png");
        }else if(request.getParameter("objInstanceId").equals("2")) { 
            nodeResponse.put("Name", "Bellas Artes");
            nodeResponse.put("Image", "http://swbsocial.infotec.com.mx/spribo/img/bellasa_big.png");
        }else if(request.getParameter("objInstanceId").equals("3")) {   
            nodeResponse.put("Name", "Centro Historico");
            nodeResponse.put("Image", "http://swbsocial.infotec.com.mx/spribo/img/centroh.png");
        }else if(request.getParameter("objInstanceId").equals("4")) {   
            nodeResponse.put("Name", "Feria de Chapultepec");
            nodeResponse.put("Image", "http://swbsocial.infotec.com.mx/spribo/img/feria.png");
        }else if(request.getParameter("objInstanceId").equals("5")) {   
            nodeResponse.put("Name", "Piramide del Sol");
            nodeResponse.put("Image", "http://swbsocial.infotec.com.mx/spribo/img/piramide.png");
        }else if(request.getParameter("objInstanceId").equals("6")) {   
            nodeResponse.put("Name", "Six Flags");
            nodeResponse.put("Image", "http://swbsocial.infotec.com.mx/spribo/img/six.png");
        }
        
        return nodeResponse;
    }
    
    
    
    
    
     static String sha1(String input) throws NoSuchAlgorithmException {
        MessageDigest mDigest = MessageDigest.getInstance("SHA1");
        byte[] result = mDigest.digest(input.getBytes());
        StringBuffer sb = new StringBuffer();
        for (int i = 0; i < result.length; i++) {
            sb.append(Integer.toString((result[i] & 0xff) + 0x100, 16).substring(1));
        }
        return sb.toString();
    }
     
     
     static String sha256(String input) throws NoSuchAlgorithmException {
        MessageDigest md = MessageDigest.getInstance("SHA-256");
        md.update(input.getBytes());
 
        byte byteData[] = md.digest();
 
        //convert the byte to hex format method 1
        StringBuffer sb = new StringBuffer();
        for (int i = 0; i < byteData.length; i++) {
         sb.append(Integer.toString((byteData[i] & 0xff) + 0x100, 16).substring(1));
        }
 
        System.out.println("Hex format : " + sb.toString());
 
        //convert the byte to hex format method 2
        StringBuffer hexString = new StringBuffer();
    	for (int i=0;i<byteData.length;i++) {
    		String hex=Integer.toHexString(0xff & byteData[i]);
   	     	if(hex.length()==1) hexString.append('0');
   	     	hexString.append(hex);
    	}
        
        return hexString.toString();
     }
%>