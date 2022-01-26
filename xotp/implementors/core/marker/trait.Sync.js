(function() {var implementors = {};
implementors["base32"] = [{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.58.0/core/marker/trait.Sync.html\" title=\"trait core::marker::Sync\">Sync</a> for <a class=\"enum\" href=\"base32/enum.Alphabet.html\" title=\"enum base32::Alphabet\">Alphabet</a>","synthetic":true,"types":["base32::Alphabet"]}];
implementors["block_buffer"] = [{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.58.0/core/marker/trait.Sync.html\" title=\"trait core::marker::Sync\">Sync</a> for <a class=\"struct\" href=\"block_buffer/struct.Eager.html\" title=\"struct block_buffer::Eager\">Eager</a>","synthetic":true,"types":["block_buffer::Eager"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.58.0/core/marker/trait.Sync.html\" title=\"trait core::marker::Sync\">Sync</a> for <a class=\"struct\" href=\"block_buffer/struct.Lazy.html\" title=\"struct block_buffer::Lazy\">Lazy</a>","synthetic":true,"types":["block_buffer::Lazy"]},{"text":"impl&lt;BlockSize, Kind&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.58.0/core/marker/trait.Sync.html\" title=\"trait core::marker::Sync\">Sync</a> for <a class=\"struct\" href=\"block_buffer/struct.BlockBuffer.html\" title=\"struct block_buffer::BlockBuffer\">BlockBuffer</a>&lt;BlockSize, Kind&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;Kind: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.58.0/core/marker/trait.Sync.html\" title=\"trait core::marker::Sync\">Sync</a>,&nbsp;</span>","synthetic":true,"types":["block_buffer::BlockBuffer"]}];
implementors["crypto_common"] = [{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.58.0/core/marker/trait.Sync.html\" title=\"trait core::marker::Sync\">Sync</a> for <a class=\"struct\" href=\"crypto_common/struct.InvalidLength.html\" title=\"struct crypto_common::InvalidLength\">InvalidLength</a>","synthetic":true,"types":["crypto_common::InvalidLength"]}];
implementors["digest"] = [{"text":"impl&lt;T, OutSize&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.58.0/core/marker/trait.Sync.html\" title=\"trait core::marker::Sync\">Sync</a> for <a class=\"struct\" href=\"digest/core_api/struct.CtVariableCoreWrapper.html\" title=\"struct digest::core_api::CtVariableCoreWrapper\">CtVariableCoreWrapper</a>&lt;T, OutSize&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;OutSize: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.58.0/core/marker/trait.Sync.html\" title=\"trait core::marker::Sync\">Sync</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;T: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.58.0/core/marker/trait.Sync.html\" title=\"trait core::marker::Sync\">Sync</a>,&nbsp;</span>","synthetic":true,"types":["digest::core_api::ct_variable::CtVariableCoreWrapper"]},{"text":"impl&lt;T&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.58.0/core/marker/trait.Sync.html\" title=\"trait core::marker::Sync\">Sync</a> for <a class=\"struct\" href=\"digest/core_api/struct.RtVariableCoreWrapper.html\" title=\"struct digest::core_api::RtVariableCoreWrapper\">RtVariableCoreWrapper</a>&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.58.0/core/marker/trait.Sync.html\" title=\"trait core::marker::Sync\">Sync</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;T as <a class=\"trait\" href=\"digest/core_api/trait.BufferKindUser.html\" title=\"trait digest::core_api::BufferKindUser\">BufferKindUser</a>&gt;::<a class=\"type\" href=\"digest/core_api/trait.BufferKindUser.html#associatedtype.BufferKind\" title=\"type digest::core_api::BufferKindUser::BufferKind\">BufferKind</a>: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.58.0/core/marker/trait.Sync.html\" title=\"trait core::marker::Sync\">Sync</a>,&nbsp;</span>","synthetic":true,"types":["digest::core_api::rt_variable::RtVariableCoreWrapper"]},{"text":"impl&lt;T&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.58.0/core/marker/trait.Sync.html\" title=\"trait core::marker::Sync\">Sync</a> for <a class=\"struct\" href=\"digest/core_api/struct.CoreWrapper.html\" title=\"struct digest::core_api::CoreWrapper\">CoreWrapper</a>&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.58.0/core/marker/trait.Sync.html\" title=\"trait core::marker::Sync\">Sync</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;T as <a class=\"trait\" href=\"digest/core_api/trait.BufferKindUser.html\" title=\"trait digest::core_api::BufferKindUser\">BufferKindUser</a>&gt;::<a class=\"type\" href=\"digest/core_api/trait.BufferKindUser.html#associatedtype.BufferKind\" title=\"type digest::core_api::BufferKindUser::BufferKind\">BufferKind</a>: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.58.0/core/marker/trait.Sync.html\" title=\"trait core::marker::Sync\">Sync</a>,&nbsp;</span>","synthetic":true,"types":["digest::core_api::wrapper::CoreWrapper"]},{"text":"impl&lt;T&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.58.0/core/marker/trait.Sync.html\" title=\"trait core::marker::Sync\">Sync</a> for <a class=\"struct\" href=\"digest/core_api/struct.XofReaderCoreWrapper.html\" title=\"struct digest::core_api::XofReaderCoreWrapper\">XofReaderCoreWrapper</a>&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.58.0/core/marker/trait.Sync.html\" title=\"trait core::marker::Sync\">Sync</a>,&nbsp;</span>","synthetic":true,"types":["digest::core_api::xof_reader::XofReaderCoreWrapper"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.58.0/core/marker/trait.Sync.html\" title=\"trait core::marker::Sync\">Sync</a> for <a class=\"enum\" href=\"digest/core_api/enum.TruncSide.html\" title=\"enum digest::core_api::TruncSide\">TruncSide</a>","synthetic":true,"types":["digest::core_api::TruncSide"]},{"text":"impl&lt;T&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.58.0/core/marker/trait.Sync.html\" title=\"trait core::marker::Sync\">Sync</a> for <a class=\"struct\" href=\"digest/struct.CtOutput.html\" title=\"struct digest::CtOutput\">CtOutput</a>&lt;T&gt;","synthetic":true,"types":["digest::mac::CtOutput"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.58.0/core/marker/trait.Sync.html\" title=\"trait core::marker::Sync\">Sync</a> for <a class=\"struct\" href=\"digest/struct.MacError.html\" title=\"struct digest::MacError\">MacError</a>","synthetic":true,"types":["digest::mac::MacError"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.58.0/core/marker/trait.Sync.html\" title=\"trait core::marker::Sync\">Sync</a> for <a class=\"struct\" href=\"digest/struct.InvalidOutputSize.html\" title=\"struct digest::InvalidOutputSize\">InvalidOutputSize</a>","synthetic":true,"types":["digest::InvalidOutputSize"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.58.0/core/marker/trait.Sync.html\" title=\"trait core::marker::Sync\">Sync</a> for <a class=\"struct\" href=\"digest/struct.InvalidBufferSize.html\" title=\"struct digest::InvalidBufferSize\">InvalidBufferSize</a>","synthetic":true,"types":["digest::InvalidBufferSize"]}];
implementors["form_urlencoded"] = [{"text":"impl&lt;'a&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.58.0/core/marker/trait.Sync.html\" title=\"trait core::marker::Sync\">Sync</a> for <a class=\"struct\" href=\"form_urlencoded/struct.Parse.html\" title=\"struct form_urlencoded::Parse\">Parse</a>&lt;'a&gt;","synthetic":true,"types":["form_urlencoded::Parse"]},{"text":"impl&lt;'a&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.58.0/core/marker/trait.Sync.html\" title=\"trait core::marker::Sync\">Sync</a> for <a class=\"struct\" href=\"form_urlencoded/struct.ParseIntoOwned.html\" title=\"struct form_urlencoded::ParseIntoOwned\">ParseIntoOwned</a>&lt;'a&gt;","synthetic":true,"types":["form_urlencoded::ParseIntoOwned"]},{"text":"impl&lt;'a&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.58.0/core/marker/trait.Sync.html\" title=\"trait core::marker::Sync\">Sync</a> for <a class=\"struct\" href=\"form_urlencoded/struct.ByteSerialize.html\" title=\"struct form_urlencoded::ByteSerialize\">ByteSerialize</a>&lt;'a&gt;","synthetic":true,"types":["form_urlencoded::ByteSerialize"]},{"text":"impl&lt;'a, T&gt; !<a class=\"trait\" href=\"https://doc.rust-lang.org/1.58.0/core/marker/trait.Sync.html\" title=\"trait core::marker::Sync\">Sync</a> for <a class=\"struct\" href=\"form_urlencoded/struct.Serializer.html\" title=\"struct form_urlencoded::Serializer\">Serializer</a>&lt;'a, T&gt;","synthetic":true,"types":["form_urlencoded::Serializer"]}];
implementors["generic_array"] = [{"text":"impl&lt;T, N&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.58.0/core/marker/trait.Sync.html\" title=\"trait core::marker::Sync\">Sync</a> for <a class=\"struct\" href=\"generic_array/iter/struct.GenericArrayIter.html\" title=\"struct generic_array::iter::GenericArrayIter\">GenericArrayIter</a>&lt;T, N&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.58.0/core/marker/trait.Sync.html\" title=\"trait core::marker::Sync\">Sync</a>,&nbsp;</span>","synthetic":true,"types":["generic_array::iter::GenericArrayIter"]},{"text":"impl&lt;T:&nbsp;<a class=\"trait\" href=\"https://doc.rust-lang.org/1.58.0/core/marker/trait.Sync.html\" title=\"trait core::marker::Sync\">Sync</a>, N:&nbsp;<a class=\"trait\" href=\"generic_array/trait.ArrayLength.html\" title=\"trait generic_array::ArrayLength\">ArrayLength</a>&lt;T&gt;&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.58.0/core/marker/trait.Sync.html\" title=\"trait core::marker::Sync\">Sync</a> for <a class=\"struct\" href=\"generic_array/struct.GenericArray.html\" title=\"struct generic_array::GenericArray\">GenericArray</a>&lt;T, N&gt;","synthetic":false,"types":["generic_array::GenericArray"]}];
implementors["hmac"] = [{"text":"impl&lt;D&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.58.0/core/marker/trait.Sync.html\" title=\"trait core::marker::Sync\">Sync</a> for <a class=\"struct\" href=\"hmac/struct.HmacCore.html\" title=\"struct hmac::HmacCore\">HmacCore</a>&lt;D&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;D as <a class=\"trait\" href=\"digest/core_api/wrapper/trait.CoreProxy.html\" title=\"trait digest::core_api::wrapper::CoreProxy\">CoreProxy</a>&gt;::<a class=\"type\" href=\"digest/core_api/wrapper/trait.CoreProxy.html#associatedtype.Core\" title=\"type digest::core_api::wrapper::CoreProxy::Core\">Core</a>: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.58.0/core/marker/trait.Sync.html\" title=\"trait core::marker::Sync\">Sync</a>,&nbsp;</span>","synthetic":true,"types":["hmac::optim::HmacCore"]},{"text":"impl&lt;D&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.58.0/core/marker/trait.Sync.html\" title=\"trait core::marker::Sync\">Sync</a> for <a class=\"struct\" href=\"hmac/struct.SimpleHmac.html\" title=\"struct hmac::SimpleHmac\">SimpleHmac</a>&lt;D&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;D: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.58.0/core/marker/trait.Sync.html\" title=\"trait core::marker::Sync\">Sync</a>,&nbsp;</span>","synthetic":true,"types":["hmac::simple::SimpleHmac"]}];
implementors["idna"] = [{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.58.0/core/marker/trait.Sync.html\" title=\"trait core::marker::Sync\">Sync</a> for <a class=\"struct\" href=\"idna/struct.Idna.html\" title=\"struct idna::Idna\">Idna</a>","synthetic":true,"types":["idna::uts46::Idna"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.58.0/core/marker/trait.Sync.html\" title=\"trait core::marker::Sync\">Sync</a> for <a class=\"struct\" href=\"idna/struct.Config.html\" title=\"struct idna::Config\">Config</a>","synthetic":true,"types":["idna::uts46::Config"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.58.0/core/marker/trait.Sync.html\" title=\"trait core::marker::Sync\">Sync</a> for <a class=\"struct\" href=\"idna/struct.Errors.html\" title=\"struct idna::Errors\">Errors</a>","synthetic":true,"types":["idna::uts46::Errors"]}];
implementors["percent_encoding"] = [{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.58.0/core/marker/trait.Sync.html\" title=\"trait core::marker::Sync\">Sync</a> for <a class=\"struct\" href=\"percent_encoding/struct.AsciiSet.html\" title=\"struct percent_encoding::AsciiSet\">AsciiSet</a>","synthetic":true,"types":["percent_encoding::AsciiSet"]},{"text":"impl&lt;'a&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.58.0/core/marker/trait.Sync.html\" title=\"trait core::marker::Sync\">Sync</a> for <a class=\"struct\" href=\"percent_encoding/struct.PercentEncode.html\" title=\"struct percent_encoding::PercentEncode\">PercentEncode</a>&lt;'a&gt;","synthetic":true,"types":["percent_encoding::PercentEncode"]},{"text":"impl&lt;'a&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.58.0/core/marker/trait.Sync.html\" title=\"trait core::marker::Sync\">Sync</a> for <a class=\"struct\" href=\"percent_encoding/struct.PercentDecode.html\" title=\"struct percent_encoding::PercentDecode\">PercentDecode</a>&lt;'a&gt;","synthetic":true,"types":["percent_encoding::PercentDecode"]}];
implementors["sha1"] = [{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.58.0/core/marker/trait.Sync.html\" title=\"trait core::marker::Sync\">Sync</a> for <a class=\"struct\" href=\"sha1/struct.Sha1Core.html\" title=\"struct sha1::Sha1Core\">Sha1Core</a>","synthetic":true,"types":["sha1::Sha1Core"]}];
implementors["sha2"] = [{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.58.0/core/marker/trait.Sync.html\" title=\"trait core::marker::Sync\">Sync</a> for <a class=\"struct\" href=\"sha2/struct.Sha256VarCore.html\" title=\"struct sha2::Sha256VarCore\">Sha256VarCore</a>","synthetic":true,"types":["sha2::core_api::Sha256VarCore"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.58.0/core/marker/trait.Sync.html\" title=\"trait core::marker::Sync\">Sync</a> for <a class=\"struct\" href=\"sha2/struct.Sha512VarCore.html\" title=\"struct sha2::Sha512VarCore\">Sha512VarCore</a>","synthetic":true,"types":["sha2::core_api::Sha512VarCore"]}];
implementors["subtle"] = [{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.58.0/core/marker/trait.Sync.html\" title=\"trait core::marker::Sync\">Sync</a> for <a class=\"struct\" href=\"subtle/struct.Choice.html\" title=\"struct subtle::Choice\">Choice</a>","synthetic":true,"types":["subtle::Choice"]},{"text":"impl&lt;T&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.58.0/core/marker/trait.Sync.html\" title=\"trait core::marker::Sync\">Sync</a> for <a class=\"struct\" href=\"subtle/struct.CtOption.html\" title=\"struct subtle::CtOption\">CtOption</a>&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.58.0/core/marker/trait.Sync.html\" title=\"trait core::marker::Sync\">Sync</a>,&nbsp;</span>","synthetic":true,"types":["subtle::CtOption"]}];
implementors["tinyvec"] = [{"text":"impl&lt;A&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.58.0/core/marker/trait.Sync.html\" title=\"trait core::marker::Sync\">Sync</a> for <a class=\"struct\" href=\"tinyvec/struct.ArrayVec.html\" title=\"struct tinyvec::ArrayVec\">ArrayVec</a>&lt;A&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;A: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.58.0/core/marker/trait.Sync.html\" title=\"trait core::marker::Sync\">Sync</a>,&nbsp;</span>","synthetic":true,"types":["tinyvec::arrayvec::ArrayVec"]},{"text":"impl&lt;'p, A, I&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.58.0/core/marker/trait.Sync.html\" title=\"trait core::marker::Sync\">Sync</a> for <a class=\"struct\" href=\"tinyvec/struct.ArrayVecSplice.html\" title=\"struct tinyvec::ArrayVecSplice\">ArrayVecSplice</a>&lt;'p, A, I&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;A: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.58.0/core/marker/trait.Sync.html\" title=\"trait core::marker::Sync\">Sync</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;I: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.58.0/core/marker/trait.Sync.html\" title=\"trait core::marker::Sync\">Sync</a>,&nbsp;</span>","synthetic":true,"types":["tinyvec::arrayvec::ArrayVecSplice"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.58.0/core/marker/trait.Sync.html\" title=\"trait core::marker::Sync\">Sync</a> for <a class=\"struct\" href=\"tinyvec/struct.TryFromSliceError.html\" title=\"struct tinyvec::TryFromSliceError\">TryFromSliceError</a>","synthetic":true,"types":["tinyvec::arrayvec::TryFromSliceError"]},{"text":"impl&lt;A&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.58.0/core/marker/trait.Sync.html\" title=\"trait core::marker::Sync\">Sync</a> for <a class=\"struct\" href=\"tinyvec/struct.ArrayVecIterator.html\" title=\"struct tinyvec::ArrayVecIterator\">ArrayVecIterator</a>&lt;A&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;A: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.58.0/core/marker/trait.Sync.html\" title=\"trait core::marker::Sync\">Sync</a>,&nbsp;</span>","synthetic":true,"types":["tinyvec::arrayvec::ArrayVecIterator"]},{"text":"impl&lt;'a, T&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.58.0/core/marker/trait.Sync.html\" title=\"trait core::marker::Sync\">Sync</a> for <a class=\"struct\" href=\"tinyvec/struct.ArrayVecDrain.html\" title=\"struct tinyvec::ArrayVecDrain\">ArrayVecDrain</a>&lt;'a, T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.58.0/core/marker/trait.Sync.html\" title=\"trait core::marker::Sync\">Sync</a>,&nbsp;</span>","synthetic":true,"types":["tinyvec::arrayvec_drain::ArrayVecDrain"]},{"text":"impl&lt;'s, T&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.58.0/core/marker/trait.Sync.html\" title=\"trait core::marker::Sync\">Sync</a> for <a class=\"struct\" href=\"tinyvec/struct.SliceVec.html\" title=\"struct tinyvec::SliceVec\">SliceVec</a>&lt;'s, T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.58.0/core/marker/trait.Sync.html\" title=\"trait core::marker::Sync\">Sync</a>,&nbsp;</span>","synthetic":true,"types":["tinyvec::slicevec::SliceVec"]},{"text":"impl&lt;'p, 's, T&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.58.0/core/marker/trait.Sync.html\" title=\"trait core::marker::Sync\">Sync</a> for <a class=\"struct\" href=\"tinyvec/struct.SliceVecDrain.html\" title=\"struct tinyvec::SliceVecDrain\">SliceVecDrain</a>&lt;'p, 's, T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.58.0/core/marker/trait.Sync.html\" title=\"trait core::marker::Sync\">Sync</a>,&nbsp;</span>","synthetic":true,"types":["tinyvec::slicevec::SliceVecDrain"]},{"text":"impl&lt;A&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.58.0/core/marker/trait.Sync.html\" title=\"trait core::marker::Sync\">Sync</a> for <a class=\"enum\" href=\"tinyvec/enum.TinyVec.html\" title=\"enum tinyvec::TinyVec\">TinyVec</a>&lt;A&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;A: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.58.0/core/marker/trait.Sync.html\" title=\"trait core::marker::Sync\">Sync</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;A as <a class=\"trait\" href=\"tinyvec/trait.Array.html\" title=\"trait tinyvec::Array\">Array</a>&gt;::<a class=\"type\" href=\"tinyvec/trait.Array.html#associatedtype.Item\" title=\"type tinyvec::Array::Item\">Item</a>: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.58.0/core/marker/trait.Sync.html\" title=\"trait core::marker::Sync\">Sync</a>,&nbsp;</span>","synthetic":true,"types":["tinyvec::tinyvec::TinyVec"]},{"text":"impl&lt;'p, A&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.58.0/core/marker/trait.Sync.html\" title=\"trait core::marker::Sync\">Sync</a> for <a class=\"enum\" href=\"tinyvec/enum.TinyVecDrain.html\" title=\"enum tinyvec::TinyVecDrain\">TinyVecDrain</a>&lt;'p, A&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;A as <a class=\"trait\" href=\"tinyvec/trait.Array.html\" title=\"trait tinyvec::Array\">Array</a>&gt;::<a class=\"type\" href=\"tinyvec/trait.Array.html#associatedtype.Item\" title=\"type tinyvec::Array::Item\">Item</a>: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.58.0/core/marker/trait.Sync.html\" title=\"trait core::marker::Sync\">Sync</a>,&nbsp;</span>","synthetic":true,"types":["tinyvec::tinyvec::TinyVecDrain"]},{"text":"impl&lt;'p, A, I&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.58.0/core/marker/trait.Sync.html\" title=\"trait core::marker::Sync\">Sync</a> for <a class=\"struct\" href=\"tinyvec/struct.TinyVecSplice.html\" title=\"struct tinyvec::TinyVecSplice\">TinyVecSplice</a>&lt;'p, A, I&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;A: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.58.0/core/marker/trait.Sync.html\" title=\"trait core::marker::Sync\">Sync</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;I: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.58.0/core/marker/trait.Sync.html\" title=\"trait core::marker::Sync\">Sync</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;A as <a class=\"trait\" href=\"tinyvec/trait.Array.html\" title=\"trait tinyvec::Array\">Array</a>&gt;::<a class=\"type\" href=\"tinyvec/trait.Array.html#associatedtype.Item\" title=\"type tinyvec::Array::Item\">Item</a>: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.58.0/core/marker/trait.Sync.html\" title=\"trait core::marker::Sync\">Sync</a>,&nbsp;</span>","synthetic":true,"types":["tinyvec::tinyvec::TinyVecSplice"]},{"text":"impl&lt;A&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.58.0/core/marker/trait.Sync.html\" title=\"trait core::marker::Sync\">Sync</a> for <a class=\"enum\" href=\"tinyvec/enum.TinyVecIterator.html\" title=\"enum tinyvec::TinyVecIterator\">TinyVecIterator</a>&lt;A&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;A: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.58.0/core/marker/trait.Sync.html\" title=\"trait core::marker::Sync\">Sync</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;A as <a class=\"trait\" href=\"tinyvec/trait.Array.html\" title=\"trait tinyvec::Array\">Array</a>&gt;::<a class=\"type\" href=\"tinyvec/trait.Array.html#associatedtype.Item\" title=\"type tinyvec::Array::Item\">Item</a>: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.58.0/core/marker/trait.Sync.html\" title=\"trait core::marker::Sync\">Sync</a>,&nbsp;</span>","synthetic":true,"types":["tinyvec::tinyvec::TinyVecIterator"]}];
implementors["typenum"] = [{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.58.0/core/marker/trait.Sync.html\" title=\"trait core::marker::Sync\">Sync</a> for <a class=\"struct\" href=\"typenum/bit/struct.B0.html\" title=\"struct typenum::bit::B0\">B0</a>","synthetic":true,"types":["typenum::bit::B0"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.58.0/core/marker/trait.Sync.html\" title=\"trait core::marker::Sync\">Sync</a> for <a class=\"struct\" href=\"typenum/bit/struct.B1.html\" title=\"struct typenum::bit::B1\">B1</a>","synthetic":true,"types":["typenum::bit::B1"]},{"text":"impl&lt;U&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.58.0/core/marker/trait.Sync.html\" title=\"trait core::marker::Sync\">Sync</a> for <a class=\"struct\" href=\"typenum/int/struct.PInt.html\" title=\"struct typenum::int::PInt\">PInt</a>&lt;U&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;U: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.58.0/core/marker/trait.Sync.html\" title=\"trait core::marker::Sync\">Sync</a>,&nbsp;</span>","synthetic":true,"types":["typenum::int::PInt"]},{"text":"impl&lt;U&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.58.0/core/marker/trait.Sync.html\" title=\"trait core::marker::Sync\">Sync</a> for <a class=\"struct\" href=\"typenum/int/struct.NInt.html\" title=\"struct typenum::int::NInt\">NInt</a>&lt;U&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;U: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.58.0/core/marker/trait.Sync.html\" title=\"trait core::marker::Sync\">Sync</a>,&nbsp;</span>","synthetic":true,"types":["typenum::int::NInt"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.58.0/core/marker/trait.Sync.html\" title=\"trait core::marker::Sync\">Sync</a> for <a class=\"struct\" href=\"typenum/int/struct.Z0.html\" title=\"struct typenum::int::Z0\">Z0</a>","synthetic":true,"types":["typenum::int::Z0"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.58.0/core/marker/trait.Sync.html\" title=\"trait core::marker::Sync\">Sync</a> for <a class=\"struct\" href=\"typenum/uint/struct.UTerm.html\" title=\"struct typenum::uint::UTerm\">UTerm</a>","synthetic":true,"types":["typenum::uint::UTerm"]},{"text":"impl&lt;U, B&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.58.0/core/marker/trait.Sync.html\" title=\"trait core::marker::Sync\">Sync</a> for <a class=\"struct\" href=\"typenum/uint/struct.UInt.html\" title=\"struct typenum::uint::UInt\">UInt</a>&lt;U, B&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;B: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.58.0/core/marker/trait.Sync.html\" title=\"trait core::marker::Sync\">Sync</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;U: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.58.0/core/marker/trait.Sync.html\" title=\"trait core::marker::Sync\">Sync</a>,&nbsp;</span>","synthetic":true,"types":["typenum::uint::UInt"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.58.0/core/marker/trait.Sync.html\" title=\"trait core::marker::Sync\">Sync</a> for <a class=\"struct\" href=\"typenum/array/struct.ATerm.html\" title=\"struct typenum::array::ATerm\">ATerm</a>","synthetic":true,"types":["typenum::array::ATerm"]},{"text":"impl&lt;V, A&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.58.0/core/marker/trait.Sync.html\" title=\"trait core::marker::Sync\">Sync</a> for <a class=\"struct\" href=\"typenum/array/struct.TArr.html\" title=\"struct typenum::array::TArr\">TArr</a>&lt;V, A&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;A: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.58.0/core/marker/trait.Sync.html\" title=\"trait core::marker::Sync\">Sync</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;V: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.58.0/core/marker/trait.Sync.html\" title=\"trait core::marker::Sync\">Sync</a>,&nbsp;</span>","synthetic":true,"types":["typenum::array::TArr"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.58.0/core/marker/trait.Sync.html\" title=\"trait core::marker::Sync\">Sync</a> for <a class=\"struct\" href=\"typenum/struct.Greater.html\" title=\"struct typenum::Greater\">Greater</a>","synthetic":true,"types":["typenum::Greater"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.58.0/core/marker/trait.Sync.html\" title=\"trait core::marker::Sync\">Sync</a> for <a class=\"struct\" href=\"typenum/struct.Less.html\" title=\"struct typenum::Less\">Less</a>","synthetic":true,"types":["typenum::Less"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.58.0/core/marker/trait.Sync.html\" title=\"trait core::marker::Sync\">Sync</a> for <a class=\"struct\" href=\"typenum/struct.Equal.html\" title=\"struct typenum::Equal\">Equal</a>","synthetic":true,"types":["typenum::Equal"]}];
implementors["unicode_bidi"] = [{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.58.0/core/marker/trait.Sync.html\" title=\"trait core::marker::Sync\">Sync</a> for <a class=\"struct\" href=\"unicode_bidi/level/struct.Level.html\" title=\"struct unicode_bidi::level::Level\">Level</a>","synthetic":true,"types":["unicode_bidi::level::Level"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.58.0/core/marker/trait.Sync.html\" title=\"trait core::marker::Sync\">Sync</a> for <a class=\"enum\" href=\"unicode_bidi/level/enum.Error.html\" title=\"enum unicode_bidi::level::Error\">Error</a>","synthetic":true,"types":["unicode_bidi::level::Error"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.58.0/core/marker/trait.Sync.html\" title=\"trait core::marker::Sync\">Sync</a> for <a class=\"enum\" href=\"unicode_bidi/enum.BidiClass.html\" title=\"enum unicode_bidi::BidiClass\">BidiClass</a>","synthetic":true,"types":["unicode_bidi::char_data::tables::BidiClass"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.58.0/core/marker/trait.Sync.html\" title=\"trait core::marker::Sync\">Sync</a> for <a class=\"struct\" href=\"unicode_bidi/struct.ParagraphInfo.html\" title=\"struct unicode_bidi::ParagraphInfo\">ParagraphInfo</a>","synthetic":true,"types":["unicode_bidi::ParagraphInfo"]},{"text":"impl&lt;'text&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.58.0/core/marker/trait.Sync.html\" title=\"trait core::marker::Sync\">Sync</a> for <a class=\"struct\" href=\"unicode_bidi/struct.InitialInfo.html\" title=\"struct unicode_bidi::InitialInfo\">InitialInfo</a>&lt;'text&gt;","synthetic":true,"types":["unicode_bidi::InitialInfo"]},{"text":"impl&lt;'text&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.58.0/core/marker/trait.Sync.html\" title=\"trait core::marker::Sync\">Sync</a> for <a class=\"struct\" href=\"unicode_bidi/struct.BidiInfo.html\" title=\"struct unicode_bidi::BidiInfo\">BidiInfo</a>&lt;'text&gt;","synthetic":true,"types":["unicode_bidi::BidiInfo"]}];
implementors["unicode_normalization"] = [{"text":"impl&lt;I&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.58.0/core/marker/trait.Sync.html\" title=\"trait core::marker::Sync\">Sync</a> for <a class=\"struct\" href=\"unicode_normalization/struct.Decompositions.html\" title=\"struct unicode_normalization::Decompositions\">Decompositions</a>&lt;I&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;I: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.58.0/core/marker/trait.Sync.html\" title=\"trait core::marker::Sync\">Sync</a>,&nbsp;</span>","synthetic":true,"types":["unicode_normalization::decompose::Decompositions"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.58.0/core/marker/trait.Sync.html\" title=\"trait core::marker::Sync\">Sync</a> for <a class=\"enum\" href=\"unicode_normalization/enum.IsNormalized.html\" title=\"enum unicode_normalization::IsNormalized\">IsNormalized</a>","synthetic":true,"types":["unicode_normalization::quick_check::IsNormalized"]},{"text":"impl&lt;I&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.58.0/core/marker/trait.Sync.html\" title=\"trait core::marker::Sync\">Sync</a> for <a class=\"struct\" href=\"unicode_normalization/struct.Recompositions.html\" title=\"struct unicode_normalization::Recompositions\">Recompositions</a>&lt;I&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;I: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.58.0/core/marker/trait.Sync.html\" title=\"trait core::marker::Sync\">Sync</a>,&nbsp;</span>","synthetic":true,"types":["unicode_normalization::recompose::Recompositions"]},{"text":"impl&lt;I&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.58.0/core/marker/trait.Sync.html\" title=\"trait core::marker::Sync\">Sync</a> for <a class=\"struct\" href=\"unicode_normalization/struct.Replacements.html\" title=\"struct unicode_normalization::Replacements\">Replacements</a>&lt;I&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;I: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.58.0/core/marker/trait.Sync.html\" title=\"trait core::marker::Sync\">Sync</a>,&nbsp;</span>","synthetic":true,"types":["unicode_normalization::replace::Replacements"]},{"text":"impl&lt;I&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.58.0/core/marker/trait.Sync.html\" title=\"trait core::marker::Sync\">Sync</a> for <a class=\"struct\" href=\"unicode_normalization/struct.StreamSafe.html\" title=\"struct unicode_normalization::StreamSafe\">StreamSafe</a>&lt;I&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;I: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.58.0/core/marker/trait.Sync.html\" title=\"trait core::marker::Sync\">Sync</a>,&nbsp;</span>","synthetic":true,"types":["unicode_normalization::stream_safe::StreamSafe"]}];
implementors["url"] = [{"text":"impl&lt;S&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.58.0/core/marker/trait.Sync.html\" title=\"trait core::marker::Sync\">Sync</a> for <a class=\"enum\" href=\"url/enum.Host.html\" title=\"enum url::Host\">Host</a>&lt;S&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;S: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.58.0/core/marker/trait.Sync.html\" title=\"trait core::marker::Sync\">Sync</a>,&nbsp;</span>","synthetic":true,"types":["url::host::Host"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.58.0/core/marker/trait.Sync.html\" title=\"trait core::marker::Sync\">Sync</a> for <a class=\"enum\" href=\"url/enum.Origin.html\" title=\"enum url::Origin\">Origin</a>","synthetic":true,"types":["url::origin::Origin"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.58.0/core/marker/trait.Sync.html\" title=\"trait core::marker::Sync\">Sync</a> for <a class=\"struct\" href=\"url/struct.OpaqueOrigin.html\" title=\"struct url::OpaqueOrigin\">OpaqueOrigin</a>","synthetic":true,"types":["url::origin::OpaqueOrigin"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.58.0/core/marker/trait.Sync.html\" title=\"trait core::marker::Sync\">Sync</a> for <a class=\"enum\" href=\"url/enum.ParseError.html\" title=\"enum url::ParseError\">ParseError</a>","synthetic":true,"types":["url::parser::ParseError"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.58.0/core/marker/trait.Sync.html\" title=\"trait core::marker::Sync\">Sync</a> for <a class=\"enum\" href=\"url/enum.SyntaxViolation.html\" title=\"enum url::SyntaxViolation\">SyntaxViolation</a>","synthetic":true,"types":["url::parser::SyntaxViolation"]},{"text":"impl&lt;'a&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.58.0/core/marker/trait.Sync.html\" title=\"trait core::marker::Sync\">Sync</a> for <a class=\"struct\" href=\"url/struct.PathSegmentsMut.html\" title=\"struct url::PathSegmentsMut\">PathSegmentsMut</a>&lt;'a&gt;","synthetic":true,"types":["url::path_segments::PathSegmentsMut"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.58.0/core/marker/trait.Sync.html\" title=\"trait core::marker::Sync\">Sync</a> for <a class=\"enum\" href=\"url/enum.Position.html\" title=\"enum url::Position\">Position</a>","synthetic":true,"types":["url::slicing::Position"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.58.0/core/marker/trait.Sync.html\" title=\"trait core::marker::Sync\">Sync</a> for <a class=\"struct\" href=\"url/struct.Url.html\" title=\"struct url::Url\">Url</a>","synthetic":true,"types":["url::Url"]},{"text":"impl&lt;'a&gt; !<a class=\"trait\" href=\"https://doc.rust-lang.org/1.58.0/core/marker/trait.Sync.html\" title=\"trait core::marker::Sync\">Sync</a> for <a class=\"struct\" href=\"url/struct.ParseOptions.html\" title=\"struct url::ParseOptions\">ParseOptions</a>&lt;'a&gt;","synthetic":true,"types":["url::ParseOptions"]},{"text":"impl&lt;'a&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.58.0/core/marker/trait.Sync.html\" title=\"trait core::marker::Sync\">Sync</a> for <a class=\"struct\" href=\"url/struct.UrlQuery.html\" title=\"struct url::UrlQuery\">UrlQuery</a>&lt;'a&gt;","synthetic":true,"types":["url::UrlQuery"]}];
implementors["xotp"] = [{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.58.0/core/marker/trait.Sync.html\" title=\"trait core::marker::Sync\">Sync</a> for <a class=\"struct\" href=\"xotp/hotp/struct.HOTP.html\" title=\"struct xotp::hotp::HOTP\">HOTP</a>","synthetic":true,"types":["xotp::hotp::HOTP"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.58.0/core/marker/trait.Sync.html\" title=\"trait core::marker::Sync\">Sync</a> for <a class=\"struct\" href=\"xotp/totp/struct.TOTP.html\" title=\"struct xotp::totp::TOTP\">TOTP</a>","synthetic":true,"types":["xotp::totp::TOTP"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.58.0/core/marker/trait.Sync.html\" title=\"trait core::marker::Sync\">Sync</a> for <a class=\"enum\" href=\"xotp/util/enum.MacDigest.html\" title=\"enum xotp::util::MacDigest\">MacDigest</a>","synthetic":true,"types":["xotp::util::MacDigest"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.58.0/core/marker/trait.Sync.html\" title=\"trait core::marker::Sync\">Sync</a> for <a class=\"enum\" href=\"xotp/util/enum.ParseResult.html\" title=\"enum xotp::util::ParseResult\">ParseResult</a>","synthetic":true,"types":["xotp::util::ParseResult"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.58.0/core/marker/trait.Sync.html\" title=\"trait core::marker::Sync\">Sync</a> for <a class=\"enum\" href=\"xotp/util/enum.ParseError.html\" title=\"enum xotp::util::ParseError\">ParseError</a>","synthetic":true,"types":["xotp::util::ParseError"]}];
if (window.register_implementors) {window.register_implementors(implementors);} else {window.pending_implementors = implementors;}})()