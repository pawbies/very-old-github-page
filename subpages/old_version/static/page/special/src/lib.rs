use wasm_bindgen::prelude::*;


#[wasm_bindgen]
pub fn calc(bin: String) -> String {
    if bin == String::from("i love frido from the bottom of my heart") {
        return String::from("<p id=\"sky\">Thank you darling <br> 2{XC4lfGTtVp}</p>");
    }

    let mut place: i32 = (bin.len() - 1).try_into().unwrap();
    let mut result = 0;

    for i in bin.char_indices() {
        let exponent = 2usize.pow(place.try_into().unwrap());
        match i.1 {
            '1' => {
                result += exponent;
                place -= 1;
            }

            '0' => place -= 1,

            _ => {
                break;
            }
        }
    }

    result.to_string()
}

#[wasm_bindgen(start)]
pub fn run() -> Result<(), JsValue> {
    let window = web_sys::window().expect("no global window exists");
    let _document = window.document().expect("No document exists");
    Ok(())
}


#[cfg(test)]
pub mod tests {
    use super::*;

    #[test]
    fn convert_bin_to_dec() {
        assert_eq!(calc("10".to_string()), "2".to_string());
        assert_eq!(calc("10000000".to_string()), "128".to_string());
        assert_eq!(calc("11111111".to_string()), "255".to_string());
    }
}