use wasm_bindgen::prelude::*;

#[wasm_bindgen]
pub fn check_password(password: &str) -> Option<String>{
    const PASSWORD: &str = "Qn9kkLtBsHL85BzYZ7GrhEvs";
    if password == PASSWORD {
        return Some("<img src=\"http://wonkville.net/wp-content/uploads/2016/12/blow-job-sex-coupon-720x384.jpeg\" alt=\"Coupon for free blowjob\">".to_string())
    }
    None
}
