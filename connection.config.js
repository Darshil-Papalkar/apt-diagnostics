export const apiLinks = {
    // baseUrl:"http://13.232.169.82:5000/"
   baseUrl:"http://localhost:5000/"
	//baseUrl:"http://65.1.134.72:5000/"
}

apiLinks.priceList = apiLinks.baseUrl+"priceList"
apiLinks.adminPackageList = apiLinks.baseUrl+"admin/getAllPackage"
apiLinks.adminGetPackageById = apiLinks.baseUrl+"admin/getPackageById"
apiLinks.checkAndFetchPackageDetails = apiLinks.baseUrl+"admin/dialogueBoxCheck"
apiLinks.adminPostPackage = apiLinks.baseUrl+"admin/postPackage"
apiLinks.adminTestList = apiLinks.baseUrl+"admin/getAllTests"
apiLinks.checkAndFetchTestDetails = apiLinks.baseUrl+"admin/checkAndGetTestById"
apiLinks.adminPostTest = apiLinks.baseUrl+"admin/postTest"
apiLinks.adminBlogList = apiLinks.baseUrl+"admin/getAllBlogs"
apiLinks.checkAndFetchBlogDetails = apiLinks.baseUrl+"admin/checkAndGetBlogById"
apiLinks.adminPostBlog = apiLinks.baseUrl+"admin/postBlog"
apiLinks.adminInsertBlog = apiLinks.baseUrl+"admin/insertBlog"
apiLinks.adminInsertBlogContent = apiLinks.baseUrl+"admin/insertBlogContent"
apiLinks.blogData = apiLinks.baseUrl+"getAllBlogs"
apiLinks.checkCoupon = apiLinks.baseUrl+"giftCoupon"
apiLinks.getCovidTests = apiLinks.baseUrl+"getCovidTests"
apiLinks.getFlebo = apiLinks.baseUrl+"getFlebo"
apiLinks.setFlebo = apiLinks.baseUrl+"setFlebo"
apiLinks.getSubscriber = apiLinks.baseUrl+"admin/getSubscribers"
apiLinks.getUserList = apiLinks.baseUrl+"admin/fetchUserList"
apiLinks.postFeedback = apiLinks.baseUrl+"postFeedback"
apiLinks.contactus = apiLinks.baseUrl+"postContactus"
apiLinks.downloadContactusData = apiLinks.baseUrl+"admin/fetchContactus"
apiLinks.downloadFeedbackData = apiLinks.baseUrl+"admin/fetchFeedbacks"
apiLinks.getPackages = apiLinks.baseUrl+"getPackages"
apiLinks.getAllFeaturedTests = apiLinks.baseUrl+"getAllFeaturedTests"
apiLinks.paymentRazorpay = apiLinks.baseUrl+"makePaymentRazorpay"
apiLinks.confirmGiftPayment = apiLinks.baseUrl+"confirmGiftPayment"
apiLinks.getAllCoupons = apiLinks.baseUrl+"getAllCoupons"
apiLinks.postCoupon = apiLinks.baseUrl+"uploadCoupon"
apiLinks.applyCoupon = apiLinks.baseUrl+"applycoupon"
apiLinks.availableSlots = apiLinks.baseUrl+"slotBooking"
apiLinks.requestCallback = apiLinks.baseUrl+"requestCallback"
apiLinks.saveBeforeBooking = apiLinks.baseUrl+"saveBeforeBooking"
apiLinks.bookLabAppointment = apiLinks.baseUrl+"bookAppointment/lab"
apiLinks.bookHomeAppointment = apiLinks.baseUrl+"bookAppointment/home"
apiLinks.loginUser = apiLinks.baseUrl+"login"
apiLinks.quickLogin = apiLinks.baseUrl+"quickLogin"
apiLinks.registerUser = apiLinks.baseUrl+"register"
apiLinks.getMemberDetails = apiLinks.baseUrl+"getMemberDetails"
