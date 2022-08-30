use rand::Rng;

pub fn generate_natural_numbers_array(len: u32) -> Vec<u32> {
    //create a sorted array
    let mut array: Vec<u32> = vec![];

    let mut count: u32 = 1;

    loop {
        if count >= len {
            break;
        }

        array.push(count);

        count = count + 1;
    }

    return array;
}

pub fn shuffle(mut unshuffled_array: Vec<u32>) -> Vec<u32> {
    let array_len = unshuffled_array.len();
    let mut i = unshuffled_array.len() - 1;

    loop {
        if i < 1 {
            break;
        }

        //pick a random index
        let j = rand::thread_rng().gen_range(0..array_len);

        let temp = unshuffled_array[i];
        unshuffled_array[i] = unshuffled_array[j];
        unshuffled_array[j] = temp;

        i = i - 1;
    }

    return unshuffled_array;
}

pub fn generate_array_of_random_unique_numbers(len: u32) -> Vec<u32> {
    let array: Vec<u32> = generate_natural_numbers_array(len);

    //shuffle the array
    return shuffle(array);
}
